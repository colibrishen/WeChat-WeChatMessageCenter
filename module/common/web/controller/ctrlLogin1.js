new Vue({
    el: '#app1',
    data: {
        errorMsg: 'Hello Vue.js!',
        database: {
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
        },
        user: {
            Name: '',
            Password: ''
        }
    },
    methods: {
        userlogin: function() {
            //let stroage = localStorage.userInfo ? localStorage.userInfo : '{}';
            this.$http.post('/userLogin', { userNo: $scope.user.Name, password: $scope.user.Password }).then(function(res) {
                if (res.data.Status == 0) {
                    window.localStorage.setItem('userInfo', JSON.stringify(data.Data));
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
        }
    }


});