function filter(data) {
        var regHeader = /^header*/gi,
            regBody = /^body*/gi,
            headers = {},
            body = {},
            prop;
    //遍历出header和body
    for (prop in data) {
        var flag1 = regHeader.test(prop);
        var text1 = prop.match(regHeader);
        var flag2 = regBody.test(prop);
        var text2 = prop.match(regBody)
        if (flag1 && text1) {
            headers[prop.split("-")[1]] = data[prop];
        }else if (flag2 && text2) {
            body[prop.split("-")[1]] = data[prop];
        }
    }
    return {
        method: data.method,
        url: data.url,
        headers: headers,
        body:body
    }
}

module.exports = filter;


// {
//     "APP": datas.APP,
//     "ACTIVITY":datas.ACTIVITY,
//     "VERSIONCODE":datas.VERSIONCODE,
//     "JOIN_LOGIN": datas.JOIN_LOGIN,
//     "Authorization": datas.Authorization
// }
// {"openId": datas.openId}