var path = require('path');
var request = require('request');
var crypto = require('crypto');
var session = require('express-session');
const _ = require('underscore');
const Guid = require('guid')
var config = require('../../../../routes/gParamConfig.js');
var errorcode = require('../../../../routes/error.js');
var post_argu = require('../../../../routes/post_argu.js');


exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/login/index')));
};

//获取IP

exports.UserLogin = function(req, res) {
    var name = req.body.userNo;
    var md5 = crypto.createHash('md5'),
        pwd = 1;
    var pwd = md5.update(req.body.password).digest('hex');
    var storage = req.body.storage
    var method = post_argu.getpath(__filename, 'UserLogin');
    request.post({
        url: method,
        body: { userNo: name, password: pwd },
        json: true,
        headers: {
            "content-type": "application/json",
        },
    }, function(error, response, body) {
        if (body == 'null') {
            res.json({
                Status: 1,
                Message: "用户名或密码错误！"
            })
        } else {
            if (error) {
                res.json({
                    Status: 200,
                    Message: errorcode["Return_Code" + 200]
                })
            } else {
                var session = require('express-session');
                // req.session.user = JSON.parse(body.d);
                console.log(body)
                req.session.infor = JSON.parse(body.d);
                if (req.session.infor.StatusCode == 0) {
                    var session = require('express-session');
                    req.session.user = JSON.parse(body.d);
                    let userId = req.session.user.Data.UserId
                    let guid = (storage.userId == userId && storage != '' ? storage.guid : Guid.create())
                    res.json({
                        Status: 0,
                        Data: { guid: guid, userId: userId },
                        Message: "登录成功！"
                    })
                    global.ws.clients.forEach( //function each(client) {
                        //if (client.readyState === WebSocket.OPEN) {
                        //  client.send(guid);
                        //}
                        client => {
                            client.send(JSON.stringify({ guid: guid, userId: req.session.user.Data.UserId, method: 'loginOut' }))
                        }
                    )
                } else {
                    res.json({
                        Status: req.session.infor.StatusCode,
                        Message: "登录失败！"
                    })
                }

            }
        }
    })

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