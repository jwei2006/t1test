let commonRequest = require('controller/commonRequestController');

const router = require('koa-router')();

router.post('/result', commonRequest.req);