var ctrlMsgCenter = require('../controller/ctrlMsgCenter.js');

module.exports = function(app) {

    //获取Access_Token
    app.get('/updateAccessToken', ctrlMsgCenter.updateAccessToken);

    //获取组织架构
    app.post('/getOrganization', ctrlMsgCenter.getOrganization);

    //获取部门成员
    app.post('/getDepartmentUsers', ctrlMsgCenter.getDepartmentUsers);

    //发送信息
    app.post('/sendMessage', ctrlMsgCenter.sendMessage);

};