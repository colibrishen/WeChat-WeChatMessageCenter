var path = require('path');
var request = require('request');
var config = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var dbInterface = require('./ctrlDbInterface.js');

exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/accountManagement/index')));
};

exports.getDepartment = function(req, res) {
    dbInterface.getDepartment(val => {
        try {
            if (val.length > 0) {
                res.json({ Status: 0, LstData: val });
            }
        } catch (error) {
            res.json({ Status: -1 });
        }
    });
};

exports.getAccountInfor = function(req, res) {
    dbInterface.getAccountInfor(req.body.id, val => {
        try {
            if (val.length > 0) {
                res.json({ Status: 0, LstData: val });
            }
        } catch (error) {
            res.json({ Status: -1 });
        }
    });
};

exports.resetPwd = function(req, res) {
    dbInterface.resetPwd(req.body, val => {
        try {
            if (val.length > 0) {
                res.json({ Status: 0 });
            }
        } catch (error) {
            res.json({ Status: -1 });
        }
    });
};