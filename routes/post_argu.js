var request = require('request');
var config = require(__dirname + '/paramConfig.js');
var errorcode = require(__dirname + '/error.js');
var path = require('path');


//提交参数
exports.post_argu = function(res, method, args) {
    request.post({
        url: method,
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: args,
    }, function(error, response, body) {
        if (error) {
            res.json({
                Data: null,
                Status: -9999,
                Message: error
            });
        } else {
            if (!body.d) {
                res.json({
                    Data: null,
                    Status: -9999,
                    Message: body.Message
                });
            } else {
                var result = JSON.parse(body.d);
                res.json({
                    Data: result.Data,
                    Status: result.StatusCode,
                    Message: result.Data
                });
            }

        }
    });
};

//获取路径
exports.getpath = function(_path, method) {
    var pt = _path.split('\\');
    return global.Webservice + '/' + pt[pt.length - 4] + '/' + pt[pt.length - 1].split('.')[0] + '.asmx/' + method;
};

//验证权限方法
//req:require
//res:response
//_path:方法路径
//method：方法名
//checkargs：验证参数
//args:原方法参数
exports.checkpermission = function(req, res, _path, method, checkargs, args) {
    var _self = this;
    var perPath = global.Webservice + '/Common/Main.asmx/AuthorityVerification';
    request.post({
        url: perPath,
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: checkargs,
    }, function(error, response, body) {
        if (error) {
            res.json({
                Data: null,
                Status: -9999,
                Message: error
            });
        } else {
            if (!body.d) {
                res.json({
                    Data: null,
                    Status: -9999,
                    Message: body.Message
                });
            } else {
                var result = JSON.parse(body.d);
                if (result.StatusCode == 0) {
                    _self.post_argu(res, _self.getpath(_path, method), args);
                } else {
                    res.render('pages-500-error');

                }
            }
        }
    });
};