exports.getErrorInfor = function(errorId) {
    for (var i = 0; i < errorCode.length; i++)
        if (errorCode[i].value == errorId) {
            return errorCode[i].msg;
        }
    return errorId;
};

//错误码
var errorCode = [
    { value: -1, msg: '系统繁忙' },
    { value: 0, msg: '请求成功' },
    { value: 40001, msg: '不合法的secret参数' },
    { value: 40003, msg: '无效的UserID' },
    { value: 40004, msg: '不合法的媒体文件类型' },
    { value: 40005, msg: '不合法的type参数' },
    { value: 40006, msg: '不合法的文件大小' },
    { value: 40007, msg: '不合法的media_id参数' },
    { value: 40009, msg: '上传图片大小不是有效值' },
    { value: 40011, msg: '上传视频大小不是有效值' },
    { value: 40013, msg: '不合法的CorpID' },
    { value: 40014, msg: '不合法的access_token' },
    { value: 40016, msg: '不合法的按钮个数' },
    { value: 40017, msg: '不合法的按钮类型' },
    { value: 40018, msg: '不合法的按钮名字长度' },
    { value: 40019, msg: '不合法的按钮KEY长度' },
    { value: 40020, msg: '不合法的按钮URL长度' },
    { value: 40022, msg: '不合法的子菜单级数' },
    { value: 40023, msg: '不合法的子菜单按钮个数' },
    { value: 40024, msg: '不合法的子菜单按钮类型' },
    { value: 40025, msg: '不合法的子菜单按钮名字长度' },
    { value: 40026, msg: '不合法的子菜单按钮KEY长度' },
    { value: 40027, msg: '不合法的子菜单按钮URL长度' },
    { value: 40029, msg: '不合法的oauth_code' },
    { value: 40031, msg: '不合法的UserID列表' },
    { value: 40032, msg: '不合法的UserID列表长度' },
    { value: 40033, msg: '不合法的请求字符' },
    { value: 40035, msg: '不合法的参数' },
    { value: 40050, msg: 'chatid不存在' },
    { value: 40054, msg: '不合法的子菜单url域名' },
    { value: 40055, msg: '不合法的菜单url域名' },
    { value: 40056, msg: '不合法的agentid' },
    { value: 40057, msg: '不合法的callbackurl或者callbackurl验证失败' },
    { value: 40058, msg: '不合法的参数' },
    { value: 40059, msg: '不合法的上报地理位置标志位' },
    { value: 40063, msg: '参数为空' },
    { value: 40066, msg: '不合法的部门列表' },
    { value: 40068, msg: '不合法的标签ID' },
    { value: 40070, msg: '指定的标签范围结点全部无效' },
    { value: 40071, msg: '不合法的标签名字' },
    { value: 40072, msg: '不合法的标签名字长度' },
    { value: 40073, msg: '不合法的openid' },
    { value: 40074, msg: 'news消息不支持保密消息类型' },
    { value: 40077, msg: '不合法的pre_auth_code参数' },
    { value: 40078, msg: '不合法的auth_code参数' },
    { value: 40080, msg: '不合法的suite_secret' },
    { value: 40082, msg: '不合法的suite_token' },
    { value: 40083, msg: '不合法的suite_id' },
    { value: 40084, msg: '不合法的permanent_code参数' },
    { value: 40085, msg: '不合法的的suite_ticket参数' },
    { value: 40086, msg: '不合法的第三方应用appid' },
    { value: 40088, msg: 'jobid不存在' },
    { value: 40089, msg: '批量任务的结果已清理' },
    { value: 40092, msg: '导入文件存在不合法的内容' },
    { value: 40093, msg: '不合法的jsapi_ticket参数' },
    { value: 40094, msg: '不合法的URL' },
    { value: 41001, msg: '缺少access_token参数' },
    { value: 41002, msg: '缺少corpid参数' },
    { value: 41004, msg: '缺少secret参数' },
    { value: 41006, msg: '缺少media_id参数' },
    { value: 41008, msg: '缺少auth code参数' },
    { value: 41009, msg: '缺少userid参数' },
    { value: 41010, msg: '缺少url参数' },
    { value: 41011, msg: '缺少agentid参数' },
    { value: 41033, msg: '缺少 description 参数' },
    { value: 41016, msg: '缺少title参数' },
    { value: 41019, msg: '缺少 department 参数' },
    { value: 41017, msg: '缺少tagid参数' },
    { value: 41021, msg: '缺少suite_id参数' },
    { value: 41025, msg: '缺少permanent_code参数' },
    { value: 42001, msg: 'access_token已过期' },
    { value: 42007, msg: 'pre_auth_code已过期' },
    { value: 42009, msg: 'suite_access_token已过期' },
    { value: 43004, msg: '指定的userid未绑定微信或未关注微信插件' },
    { value: 44001, msg: '多媒体文件为空' },
    { value: 44004, msg: '文本消息content参数为空' },
    { value: 45001, msg: '多媒体文件大小超过限制' },
    { value: 45002, msg: '消息内容大小超过限制' },
    { value: 45004, msg: '应用description参数长度不符合系统限制' },
    { value: 45007, msg: '语音播放时间超过限制' },
    { value: 45008, msg: '图文消息的文章数量不符合系统限制' },
    { value: 45009, msg: '接口调用超过限制' },
    { value: 45022, msg: '应用name参数长度不符合系统限制' },
    { value: 45024, msg: '帐号数量超过上限' },
    { value: 45026, msg: '触发删除用户数的保护' },
    { value: 45032, msg: '图文消息author参数长度超过限制' },
    { value: 46003, msg: '菜单未设置' },
    { value: 46004, msg: '指定的用户不存在' },
    { value: 48002, msg: 'API接口无权限调用' },
    { value: 48003, msg: '不合法的suite_id' },
    { value: 48004, msg: '授权关系无效' },
    { value: 48005, msg: 'API接口已废弃' },
    { value: 50001, msg: 'redirect_url未登记可信域名' },
    { value: 50002, msg: '成员不在权限范围' },
    { value: 50003, msg: '应用已禁用' },
    { value: 60001, msg: '部门长度不符合限制' },
    { value: 60003, msg: '部门ID不存在' },
    { value: 60004, msg: '父部门不存在' },
    { value: 60005, msg: '部门下存在成员' },
    { value: 60006, msg: '部门下存在子部门' },
    { value: 60007, msg: '不允许删除根部门' },
    { value: 60008, msg: '部门已存在' },
    { value: 60009, msg: '部门名称含有非法字符' },
    { value: 60010, msg: '部门存在循环关系' },
    { value: 60011, msg: '指定的成员/部门/标签参数无权限' },
    { value: 60012, msg: '不允许删除默认应用' },
    { value: 60020, msg: '访问ip不在白名单之中' },
    { value: 60028, msg: '不允许修改第三方应用的主页 URL' },
    { value: 60102, msg: 'UserID已存在' },
    { value: 60103, msg: '手机号码不合法' },
    { value: 60104, msg: '手机号码已存在' },
    { value: 60105, msg: '邮箱不合法' },
    { value: 60106, msg: '邮箱已存在' },
    { value: 60107, msg: '微信号不合法' },
    { value: 60110, msg: '用户所属部门数量超过限制' },
    { value: 60111, msg: 'UserID不存在' },
    { value: 60112, msg: '成员name参数不合法' },
    { value: 60123, msg: '无效的部门id' },
    { value: 60124, msg: '无效的父部门id' },
    { value: 60125, msg: '非法部门名字' },
    { value: 60127, msg: '缺少department参数' },
    { value: 60129, msg: '成员手机和邮箱都为空' },
    { value: 72023, msg: '发票已被其他公众号锁定' },
    { value: 72024, msg: '发票状态错误' },
    { value: 72037, msg: '存在发票不属于该用户' },
    { value: 80001, msg: '可信域名不正确，或者无ICP备案' },
    { value: 81001, msg: '部门下的结点数超过限制（3W）' },
    { value: 81002, msg: '部门最多15层' },
    { value: 81011, msg: '无权限操作标签' },
    { value: 82001, msg: '指定的成员/部门/标签全部无效' },
    { value: 82002, msg: '不合法的PartyID列表长度' },
    { value: 82003, msg: '不合法的TagID列表长度' },
    { value: 84014, msg: '成员票据过期' },
    { value: 84015, msg: '成员票据无效' },
    { value: 84019, msg: '缺少templateid参数' },
    { value: 84020, msg: 'templateid不存在' },
    { value: 84021, msg: '缺少register_code参数' },
    { value: 84022, msg: '无效的register_code参数' },
    { value: 84023, msg: '不允许调用设置通讯录同步完成接口' },
    { value: 84024, msg: '无注册信息' },
    { value: 85002, msg: '包含不合法的词语' },
    { value: 85004, msg: '每企业每个月设置的可信域名不可超过20个' },
    { value: 85005, msg: '可信域名未通过所有权校验' },
    { value: 86001, msg: '参数 chatid 不合法' },
    { value: 86003, msg: '参数 chatid 不存在' },
    { value: 86216, msg: '存在非法会话成员ID' },
    { value: 86217, msg: '会话发送者不在会话成员列表中' },
    { value: 86220, msg: '指定的会话参数不合法' },
    { value: 90002, msg: '缺少摇一摇周边ticket参数' },
    { value: 90003, msg: '摇一摇周边ticket参数不合法' },
    { value: 91040, msg: '获取ticket的类型无效' },
    { value: 301002, msg: '无权限操作指定的应用' },
    { value: 301005, msg: '不允许删除创建者' },
    { value: 301012, msg: '参数 position 不合法' },
    { value: 301013, msg: '参数 telephone 不合法' },
    { value: 301014, msg: '参数 english_name 不合法' },
    { value: 301015, msg: '参数 mediaid 不合法' },
    { value: 301016, msg: '上传语音文件不符合系统要求' },
    { value: 301017, msg: '上传语音文件仅支持AMR格式' },
    { value: 301021, msg: '参数 userid 无效' },
    { value: 301022, msg: '获取打卡数据失败' },
    { value: 301023, msg: 'useridlist非法或超过限额' },
    { value: 301024, msg: '获取打卡记录时间间隔超限' },
    { value: 301036, msg: '不允许更新该用户的userid' },
    { value: 302004, msg: '组织架构不合法' },
    { value: 2000002, msg: 'CorpId参数无效' }
];