
let ipUrl = 'http://127.0.0.1:7001/admin/';

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',       // 检查登录的用户名和密码
    getTypeInfo: ipUrl + 'getTypeInfo',     // 获取文章类型信息
    checkLogout: ipUrl + 'checkLogout',     // 测试退出
    addArticle: ipUrl + 'addArticle',       // 发布文章
}

export default servicePath