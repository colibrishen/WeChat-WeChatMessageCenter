var ctrlAccount = require('../controller/ctrlAccount.js');

module.exports = function(app) {
    app.get('/accountManagement', ctrlAccount.Index);

    app.get('/getDepartment', ctrlAccount.getDepartment);

    app.post('/getAccountInfor', ctrlAccount.getAccountInfor);

    app.post('/resetPwd', ctrlAccount.resetPwd);
};