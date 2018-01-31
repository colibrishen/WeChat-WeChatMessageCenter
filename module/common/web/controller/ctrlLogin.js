var app = angular.module('login', []);

app.controller('ctrlLogin', function($scope, $http) {
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

    $scope.user = {
        Name: '',
        Password: ''
    };

    $scope.errorMsg = '';

    $scope.checkuser = function() {
        //let stroage = localStorage.userInfo ? localStorage.userInfo : '{}';
        $http.post('/userLogin', { userNo: $scope.user.Name, password: $scope.user.Password }).success(function(data) {
            if (data.Status == 0) {
                window.localStorage.setItem('userInfo', JSON.stringify(data.Data))
                window.location = '/homeERP';
            } else {
                if (data.Status == -1) {
                    $.gritter.add({
                        position: 'bottom-right',
                        title: '该账户已被禁用！'
                    });
                } else {
                    if (data.Status == -1) {
                        errorMsg = "用户名或密码错误！";
                    }
                }

            }
        });
    };

    $('body').on('keypress', function(data) {
        if (data.keyCode == 13) {
            $scope.checkuser();
        }
    });
});