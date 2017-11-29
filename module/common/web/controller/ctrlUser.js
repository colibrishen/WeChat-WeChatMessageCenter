var app = angular.module('userManagement', []);

app.controller('ctrlUserManagement', function($http, $scope) {

    $scope.Database = {
        user: 'sa',
        password: '1`q',
        server: '192.168.30.66',
        database: 'ZGOfficeAuto',
        option: {
            encrpt: true
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 30000
        }
    };

    //连接
    $http.post('/userConnectDb', { model: $scope.Database }).success(function(data) {
        if (data.Status == 0) {
            alert(data.Msg);
        }
    });
});