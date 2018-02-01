var app = new Vue({
    el: '#vueLogin',
    data: {
        errorMsg: '消息中心',
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
            axios.post('/userLogin', { userNo: this.user.Name, password: this.user.Password }).then(res => {
                if (res.data.Status == 0) {
                    window.location = '/main';
                } else {
                    if (res.data.Status == -1) {
                        this.errorMsg = "用户名或密码错误！";
                    }
                }
            });
        }
    }
});