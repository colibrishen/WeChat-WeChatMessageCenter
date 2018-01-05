var ctrlLogin = require('../controller/ctrlLogin.js');

module.exports = function(app) {
    app.get('/login', ctrlLogin.Index);

    app.post('/userLogin', ctrlLogin.UserLogin);
};