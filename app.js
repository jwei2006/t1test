const Koa = require("koa");
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const axios = require('axios');
const views = require('koa-views');
const filter = require('./tool/filter.js');
const app = new Koa();
const router = require('src/router');

app.use(require('koa-static')(__dirname + '/public'));

app.use(router.routes()).listen(3000);
console.log('app started at port 3000...');