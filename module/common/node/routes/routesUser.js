var ctrlUser = require('../controller/ctrlUser.js');

module.exports = function(app) {

    //获取页面
    app.get('/userManagement', ctrlUser.index);

    //连接数据库
    app.post('/userConnectDb', ctrlUser.connectDb);

    //获取用户组
    app.post('/getUserGroup', ctrlUser.getUserGroup);
};