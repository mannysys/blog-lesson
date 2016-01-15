'use strict';
var PW = require('png-word');   //验证码图片
var RW = require('random-word'); //验证码随机字符

var pngword = new PW(PW.GREEN);
var rw = RW('abcdefghijklmnopgrst1234567890');//定义验证码字符

module.exports = function(req, res){

    let word = rw.random(4);
    res.writeHead('Content-Type','image/png');
    //先创建一个只读的流，然后通过管道响应出去
    pngword.createReadStream(word).pipe(res);


};