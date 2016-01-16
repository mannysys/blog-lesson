'use strict';
var PW = require('png-word');   //验证码图片
var RW = require('random-word'); //验证码随机字符

var pngword = new PW(PW.GREEN);
var rw = RW('abcdefghijklmnopgrst1234567890');//定义验证码字符

module.exports = function(req, res){
    //从定义的字符串中生成随机4个字符验证码
    let word = rw.random(4);
    //将每次生成的随机验证码存储的session中
    req.session.vnum = word;
    res.writeHead('Content-Type','image/png');
    //先创建一个只读的流，然后通过管道响应出去
    pngword.createReadStream(word).pipe(res);


};