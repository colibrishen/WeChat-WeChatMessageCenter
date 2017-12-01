var path = require('path');
var request = require('request');
var paramConfig = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var mssql = require("mssql");
var db = require('../../../../routes/db.js');

var dbParam = {};
var connection = {};

exports.index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/userManagement/index')));
};

exports.connectDb = function(req, res) {
    dbParam = req.body.model;
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
    dbParam = req.body.model;
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