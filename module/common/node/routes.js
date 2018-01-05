var common = {};
common.routeMain = require('./routes/routeMain');
common.routeUser = require('./routes/routeUser');
common.routeAccount = require('./routes/routeAccount');
common.routeMsgCenter = require('./routes/routeMsgCenter');
common.routeLogin = require('./routes/routeLogin');


module.exports = function(app) {

    common.routeMain(app);

    common.routeUser(app);

    common.routeAccount(app);

    common.routeMsgCenter(app);

    common.routeLogin(app);
};