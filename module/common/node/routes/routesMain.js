var ctrlMain = require('../controller/ctrlMain.js');

module.exports = function(app) {
    app.get('/main', ctrlMain.Index);
};