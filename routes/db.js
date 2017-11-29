var mssql = require('mssql');
var db = {};

db.sql = function(connection, sql, callBack) {
    var ps = new mssql.PreparedStatement(connection);
    ps.prepare(sql, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        ps.execute('', function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            ps.unprepare(function(err) {
                if (err) {
                    console.log(err);
                    callback(err, null);
                    return;
                }
                callBack(err, result);
            });
        });
    });
};

module.exports = db;