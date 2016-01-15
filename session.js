'use strict';
var qs = require('querystring');  //对请求字符串解析
var cache = {};
var sid = 0;

module.exports = function(req, res){
    var cookie = req.headers.cookie;
    var cookieJSONObj = {};

    if(cookie){
        // split以分号；进行切割返回数组
        cookieJSONObj = qs.parse(cookie.split(';').join('&'));
    }

    //检查cookie里有没有session id
    if(cookieJSONObj.sid && cache[cookieJSONObj.sid]){
        return cache[cookieJSONObj.sid];
    }else{
        sid += 1;
        res.setHeader('Set-Cookie',[`sid=${sid}`]);
        return cache[sid] = {};
    }




};