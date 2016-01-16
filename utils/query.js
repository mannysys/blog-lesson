'use strict';
var qs = require('querystring');
var url = require('url');

module.exports = function query(req){
        //解析url路径字符串
        let query = url.parse(req.url).query;
        return qs.parse(query); //解析成json格式，返回结果
};