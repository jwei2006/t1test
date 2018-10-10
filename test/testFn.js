const Koa = require("koa");
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const axios = require('axios');
const views = require('koa-views');
const filter = require('./tool/filter.js');
const app = new Koa();
app.use(views(__dirname + "/repo", {
    map: {
        html: "underscore"
    }
}));
app.use(async (ctx, next) => {
    console.log("请求执行");
    await next();
})
router.get("/", async (ctx) => {
    await ctx.render('test-temp.html');
})
router.post("/result", async (ctx, next) => {
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
})
app.use(bodyParser());
app.use(router.routes()).listen(3000);
console.log('app started at port 3000...');