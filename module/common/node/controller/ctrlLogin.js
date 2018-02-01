var path = require('path');
var request = require('request');
var config = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');
var dbInterface = require('./ctrlDbInterface.js');

exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/login/index')));
};

//获取IP
exports.UserLogin = function(req, res) {
    var name = req.body.userNo;
    var md5 = crypto.createHash('md5'),
        pwd = 1;
    var pwd = md5.update(req.body.password).digest('hex');
    var storage = req.body.storage;
    var model = { userName: name, password: pwd };
    dbInterface.userLogin(model, function(val) {
        try {
            if (val.length > 0) {
                var userPwd = val[0].User_Password;
                if (pwd == userPwd) {
                    res.json({ Status: 0 });
                } else {
                    res.json({ Status: -1 });
                }
            } else {
                res.json({ Status: -1 });
            }
        } catch (error) {
            res.json({ Status: -1 });
        }
    });
};

exports.logout = function(req, res) {
    req.session.user = null;
    req.session.selectedStorageNo = null;
    req.session.selectedStorage = null;
    req.session.selectedOutbound = null;
    req.session.getPriceId = null;
    res.redirect('/');
}


function checkIP(IP, UserID) {
    for (let i = 0; i < global.Client.length; i++) {
        if (global.Client[i].UserID == UserID && global.Client[i].IP != IP) {
            global.ws.clients.forEach(function each(client) {
                if (_.indexOf(global.Client[i].ClientId, client._ultron.id) > -1) {
                    client.send(JSON.stringify({
                        msg: "你的账户已在其他地方登录!"
                    }));
                    global.Client.splice(i, 1);
                    return;
                }
            })
        }
    }
}