const axios = require('axios');

var req = async (ctx, next) => {
    var datas = filter(ctx.request.body);
    console.log(datas.headers)
    await axios({
        method: datas.method,
        url: datas.url,
        headers: datas.headers ? datas.headers : "",
        data: datas.body ? datas.body : ""
    }).then((res) => {
        console.log("执行完成")
        ctx.response.body = res.data;
    }).catch((error)=> {
        console.log(error);
    })
};

module.exports  = {req};