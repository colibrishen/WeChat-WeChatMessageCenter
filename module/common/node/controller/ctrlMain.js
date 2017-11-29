var path = require('path');
var request = require('request');
var config = require('../../../../routes/paramConfig.js');
var session = require('express-session');
var post_argu = require('../../../../routes/post_argu.js');
var crypto = require('crypto');

exports.Index = function(req, res) {
    res.render(res.render(path.resolve(__dirname, '../../web/view/main/index')));
};