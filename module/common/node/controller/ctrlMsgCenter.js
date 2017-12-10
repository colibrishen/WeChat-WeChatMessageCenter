var path = require('path');
var request = require('request');
var paramConfig = require('../../../../routes/paramConfig.js');
var gParamConfig = require('../../../../routes/gParamConfig.js');
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
var msgBody = {};

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
                data = gParamConfig.weChatAccessToken = body.access_token;
                console.log(gParamConfig.weChatAccessToken);
            }
        }
    }
};

setInterval(function() {
    getWeChatAccessToken();
}, getDayInfor);

getWeChatAccessToken();

exports.updateAccessToken = function(req, res) {
    var method = paramConfig.msgHostName + '/cgi-bin/gettoken?corpid=' + paramConfig.weChatSecret;
    post_argu.get_weChat_accessToken(res, method);
    console.log(gParamConfig.weChatAccessToken);
};

//获取组织架构 tpye：0 
exports.getOrganization = function(req, res){
    var id = req.body;
    var method = paramConfig.msgHostName + '/cgi-bin/department/list?access_token=' + gParamConfig.weChatAccessToken + '&id=' + id;
    post_argu.get_weChatMsg(res, method, 0);
};

//获取部门成员
exports.getDepartmentUsers= function(req, res){
    var departementInfor = req.body;
    var method = paramConfig.msgHostName + '/cgi-bin/user/simplelist?access_token=' 
                + gParamConfig.weChatAccessToken + '&department_id=' 
                + departmentId + '';
    post_argu.get_weChatMsg(res, method, 0);
};


//发送消息
exports.sendMessage = function(req, res) {
    var method = paramConfig.msgHostName + '/cgi-bin/message/send?access_token=' + gParamConfig.weChatAccessToken;
    var model = req.body;
    msgBody = {
        touser: model.UserName,
        msgtype: model.MsgType,
        agentid: 1,
        text: {
            content: model.Content
        },
        safe: 0
    };
    post_argu.post_weChatMsg(res, method, msgBody);
};

