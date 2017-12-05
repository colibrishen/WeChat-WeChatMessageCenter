exports.getErrorInfor = function(errorId) {
    angular.forEach(errorCode, function(gpInfor) {
        if (gpInfor.value == errorId) {
            return gpInfor.msg;
        }
    });
    return errorId;
};

//错误码
var errorCode = [
    { value: -40001, msg: '签名验证错误' }
];