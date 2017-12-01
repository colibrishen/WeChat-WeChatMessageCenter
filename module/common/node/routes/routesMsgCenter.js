var ctrlMsgCenter = require('../controller/ctrlMsgCenter.js');

module.exports = function(app) {

    //获取Access_Token
    app.get('/getAccessToken', ctrlMsgCenter.getAccessToken);

};