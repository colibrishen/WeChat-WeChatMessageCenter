var app = new Vue({
    el: '#vueAccountMge',
    data: {
        Item: 0,
        Department: [],
        AccountInfors: []
    },
    methods: {
        toggleChildren: function(item) {
            item.expanded = !item.expanded;
        },
        getAccountInfor: function(departmentId) {
            axios.post('/getAccountInfor', { id: departmentId }).then(res => {
                if (res.data.Status == 0) {
                    this.AccountInfors = res.data.LstData;
                } else {
                    console.log(res.data.LstData);
                }
            });
        },
        resetPwd: function(userId, pwd) {
            axios.post('/resetPwd', { id: userId, password: pwd }).then(res => {
                if (res.data.Status == 0) {
                    this.AccountInfors = res.data.LstData;
                } else {
                    console.log(res.data.LstData);
                }
            });
        }
    },
    created() {
        axios.get('/getDepartment').then(res => {
            if (res.data.Status == 0) {
                this.Department = paramInfor(0, res.data.LstData);
            } else {
                console.log(res.data.LstData);
            }
        });

        var paramInfor = function(pid, lstData) {
            var lstChild = [];
            var j = 0;
            for (var i = 0; i < lstData.length; i++) {
                if (lstData[i].Department_P_Id == pid) {
                    var childInfor = {
                        Department_Name: '',
                        expanded: false,
                        Department_Id: 0,
                        Department_No: 0,
                        children: []
                    };
                    childInfor.Department_Name = lstData[i].Department_Name;
                    childInfor.Department_Id = lstData[i].Department_Id;
                    childInfor.Department_No = lstData[i].Department_No;
                    childInfor.children = paramInfor(lstData[i].Department_Id, lstData);
                    lstChild.push(childInfor);
                }
            }
            return lstChild;
        };
    },
});