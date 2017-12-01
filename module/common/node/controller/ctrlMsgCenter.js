var path = require('path');
var request = require('request');
var paramConfig = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var mssql = require("mssql");
var db = require('../../../../routes/db.js');
var post_argu = require('../../../../routes/post_argu.js');

var dbParam = {};
var connection = {};

exports.getAccessToken = function(req, res) {
    var method = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=wx833e6b57e7e08ae0&corpsecret=aBFe3FrIE6zeDHAv_FwjQppNZpqQwbWxFJWwg6AftLA';
    post_argu.get_weChat_argu(res, method);
};

// exports.getAccessToken = function(req, res) {
//     var https = require('https');
//     var qs = require('querystring');
//     var data = {
//         corpid: 'wx833e6b57e7e08ae0&corpsecret=aBFe3FrIE6zeDHAv_FwjQppNZpqQwbWxFJWwg6AftLA'
//     }; //这是需要提交的数据 
//     var content = qs.stringify(data);
//     var options = {
//         hostname: 'qyapi.weixin.qq.com',
//         path: '/cgi-bin/gettoken?' + content,
//         method: 'GET'
//     };
//     var req = https.request(options, function(res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function(chunk) {
//             console.log('BODY: ' + chunk);
//         });
//     });
//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });
//     req.end();
// };