var fs = require("fs");
var path = require("path");

/* GET home page. */
module.exports = function(app) {
    var module_path = path.resolve(__dirname + '/../module');
    var routes = {};
    fs.readdirSync(module_path).forEach(function(fileInfor) {
        routes[fileInfor] = require('../module/' + fileInfor + '/node/routes.js');
        routes[fileInfor](app);
        console.log('路由' + fileInfor + '加载成功！');
    });
};