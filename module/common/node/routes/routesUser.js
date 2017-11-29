var ctrlUser = require('../controller/ctrlUser.js');

module.exports = function(app) {
    app.get('/userManagement', ctrlUser.Index);
};