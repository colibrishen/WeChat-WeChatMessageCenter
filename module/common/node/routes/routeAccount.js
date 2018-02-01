var ctrlAccount = require('../controller/ctrlAccount.js');

module.exports = function(app) {
    app.get('/accountManagement', ctrlAccount.Index);

    app.get('/getDepartment', ctrlAccount.getDepartment);
};