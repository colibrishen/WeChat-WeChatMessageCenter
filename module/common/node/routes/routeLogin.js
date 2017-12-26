var ctrlMain = require('../controller/ctrlLogin.js');

module.exports = function(app) {
    app.get('/login', ctrlMain.Index);
};