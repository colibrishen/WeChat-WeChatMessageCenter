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

    $scope.userGroup = [];

    //connect datebase
    // $http.post('/userConnectDb', { model: $scope.Database }).success(function(data) {
    //     if (data.Status == 0) {
    //         alert(data.Msg);
    //     }
    // });

    //get user group information
    $http.post('/getUserGroup', { model: $scope.Database }).success(function(data) {
        if (data.status == 0) {
            $scope.userGroup = $scope.getUserGp(data.msg, 0);
        }
    });

    //?????
    $scope.getUserGp = function(objct, gpId) {
        var szTemp = [];
        angular.forEach(objct, function(gpInfor, index, arry) {
            if (gpInfor.Gp_P_Id == gpId) {
                var objTemp = {};
                objTemp.gpInfor = gpInfor;
                objTemp.childInfor = $scope.getUserGp(objct, gpInfor.Gp_Id);
                szTemp.push(objTemp);
            }
        });
        return szTemp;
    };

});