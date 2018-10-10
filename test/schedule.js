/****** 定时任务 ***/

const axios = require('axios');
const schedule = require("node-schedule");
function DoLottery () {
    axios({
        method: "post",
        url: "http://test-activity.changyou.com/changyou/xtl/octReflux/lottery",
        headers: {
            "APP" : "xtl",
            "ACTIVITY" :"oct_reflux",
            "VERSIONCODE" :"20181001"
        }
    }).then((res) => {
        console.log("执行完成")
        console.log(res.data);
    }).catch((error)=> {
        console.log(error);
    })
};
function DoLog () {
    axios({
        method: "post",
        url: "http://test-activity.changyou.com/changyou/lottery",
        headers: {
            "APP" : "dsdjz",
            "ACTIVITY" :"test",
            "VERSIONCODE" :"20180521",
            "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJKT0lOX1VTRVIiOiIxIn0.vBuCOGW3hYy5nFDDise4JKi6Ol1flrl_bY9oGj9Tx8I_5b5tvZo3YeLgr6zpIXmf1AwE0_Lb64cNLKae_9wiRw",
            "JOIN_LOGIN": "0FD56D71D315E1392DA5DD64606ED42FDF3326A47BC8286CEBEAC9690CF8BC4737BAFB59A726A0BF068B5607618F7AA8B5302D7E4A574068D3D3F8F14D192A55229079EE551620CFEB7EA32C6807AA2EC945D0C32D07583274308FE16B44095499B664985884507B52A4E7C86151105867528CC3AC71CD1FA86F14485F302671E19FA85A21F22428AA0FFC1BE061ADE20803B56798E07E8CC1CD2189BD91503B"
        },
        data:{openId:"11"}
    }).then((res) => {
        console.log("执行完成")
        console.log(res.data);
    }).catch((error)=> {
        console.log(error);
    })
};
function DoTestToken() {
    axios({
        method: "get",
        url: "http://test-activity.changyou.com/test/token?guid=1",
        headers: {
            "APP": "dsdjz",
            "ACTIVITY": "test",
            "VERSIONCODE": "20180521",
        }
    }).then((res) => {
        console.log("执行完成")
        console.log(res.data);
    }).catch((error)=> {
        console.log(error);
    })
}
var rule1 = new schedule.RecurrenceRule();
var times1 = [1,6,11,16,21,26,31,36,41,46,51,56];
rule1.second  = times1;
var cancelSch = schedule.scheduleJob(rule1, function(){
    DoLottery();
    DoLog();
    DoTestToken();
});
setTimeout( function () {
    cancelSch.cancel();
},10000);
