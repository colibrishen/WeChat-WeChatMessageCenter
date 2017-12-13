var paramConfig = require('./paramConfig');
var log4js = require('log4js');

log4js.configure({
    appenders: {
        ruleConsole: { type: 'console' },
        ruleFile: {
            type: 'dateFile',
            filename: paramConfig.logPath,
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 1024,
            numBackups: 4,
            category: 'normal',
            alwaysIncludePattern: false
        }
    },
    categories: {
        default: { appenders: ['ruleConsole', 'ruleFile'], level: 'info' }
    },
    replaceConsole: true
});

var logger = log4js.getLogger('normal');
exports.trace = function(msg) {
    logger.trace(msg);
};
exports.debug = function(msg) {
    logger.debug(msg);
};
exports.info = function(msg) {
    logger.info(msg);
};
exports.error = function(msg) {
    logger.error(msg);
};
exports.warn = function(msg) {
    logger.warn(msg);
};
exports.fatal = function(msg) {
    logger.fatal(msg);
};