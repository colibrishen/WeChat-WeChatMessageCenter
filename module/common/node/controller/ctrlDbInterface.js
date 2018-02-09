var path = require('path');
var request = require('request');
var paramConfig = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var mssql = require("mssql");
var db = require('../../../../routes/db.js');


var dbParam = {
    user: 'sa',
    password: '1`q',
    server: '192.168.30.66',
    database: 'ZGOfficeAuto',
    option: {
        encrpt: true
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000
    }
};
var connection = {};

exports.connectDb = function(req, res) {
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.send({ Status: 0, Msg: '连接数据库成功!' });
        }
    });
};

exports.getUserGroup = function(req, res) {
    var loginInfor = req.body.model;
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            db.sql(connection, "SELECT * FROM T_UserGroupInfors", function(err, result) {
                res.send({
                    status: 0,
                    msg: result.recordset
                });
            });
        }
    });
};

exports.userLogin = function(loginInfor, callback) {
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            db.sql(connection, "SELECT * FROM T_UserInfors where User_No = '" + loginInfor.userName + "'", function(err, result) {
                callback && callback(result.recordset);
            });
        }
    });
};

exports.getDepartment = function(callback) {
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            db.sql(connection, "SELECT * FROM T_Department", function(err, result) {
                callback && callback(result.recordset);
            });
        }
    });
};

exports.getAccountInfor = function(departmentId, callback) {
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            db.sql(connection, "SELECT us.* FROM T_Department as dp " +
                "LEFT  JOIN T_DepartmentManager as dm ON dp.Department_Id = dm.Department_Id " +
                "LEFT JOIN T_UserInfors as us ON dm.Manager = us.User_Id " +
                "where dp.Department_Id = " + departmentId,
                function(err, result) {
                    callback && callback(result.recordset);
                });
        }
    });
};

exports.resetPwd = function(body, callback) {
    connection = new mssql.ConnectionPool(dbParam, function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            var md5 = crypto.createHash('md5'),
                pwd = 1;
            var pwd = md5.update(body.pwd).digest('hex');
            db.sql(connection, "UPDATE T_UserInfors SET User_Password = " + pwd + " WHERE User_Id = " + body.Id,
                function(err, result) {
                    callback && callback(result.recordset);
                });
        }
    });
};