var common = {};
common.routesMain = require('./routes/routesMain');
common.routesUser = require('./routes/routesUser');
common.routesAccount = require('./routes/routesAccount');
common.routesMsgCenter = require('./routes/routesMsgCenter');

module.exports = function(app) {

    common.routesMain(app);

    common.routesUser(app);

    common.routesAccount(app);

    common.routesMsgCenter(app);
};