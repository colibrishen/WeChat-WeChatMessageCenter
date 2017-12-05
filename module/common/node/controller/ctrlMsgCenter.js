var path = require('path');
var request = require('request');
var paramConfig = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var mssql = require("mssql");
var db = require('../../../../routes/db.js');
var post_argu = require('../../../../routes/post_argu.js');
var child_process = require('child_process');

//定义
var dbParam = {};
var connection = {};
var getDayInfor = 1000 * 60 * 60 * 24;
var weChatAccessToken = null;

var getWeChatAccessToken = function() {
    var method = paramConfig.msgHostName + '/cgi-bin/gettoken?corpid=' + paramConfig.weChatSecret;
    post_argu.get_weChat_argu(method, cb);

    //回调
    function cb(error, response, body) {
        var data = {};
        if (error) {
            data = {
                Data: null,
                Status: -900001,
                Message: error
            };
        } else {
            if (body.errcode != 0) {
                data = {

                    Data: null,
                    Status: body.errcode,
                    Message: body.errmsg
                };
            } else {
                data = weChatAccessToken = body.access_token;
            }
        }
        console.log(data);
    }
};

setInterval(function() {
    getWeChatAccessToken();
}, getDayInfor);

getWeChatAccessToken();

exports.getAccessToken = function(req, res) {
    var method = paramConfig.msgHostName + '/cgi-bin/gettoken?corpid=' + paramConfig.weChatSecret;
    post_argu.get_weChat_argu(res, method);
};