'use strict';
var querystring = require('querystring'); //解析请求的字符串转换成json对象

module.exports = function(req){
    /*
     * 定义回调函数，调用函数resolve说明成功了，函数reject是抛出异常有问题
     * 一个promise是一个带有".then()"方法的对象，其代表的是一个操作的结果可能还没有或不知道，
     * 无论谁访问这个对象，都能够使用".then()"方法加入回调等待操作出现成功结果或失败时的提醒通知
     */
    return new Promise(function(resolve, reject){
        let result = '';
        let jsonObj;
        //监听请求的data事件
        req.on('data', function (chuck) {
            result += chuck; //接收数据
        });
        //监听数据接收完结束事件end
        req.on('end', function () {
            jsonObj = querystring.parse(result);//解析接收的字符串转换成json对象格式
            resolve(jsonObj);
        });

    });



};