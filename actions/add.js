'use strict';
var database = require('../database');
var AddPager = require('../views/AddPager');
var post = require('./post');
var IndexPager = require('../views/IndexPager');
var loginAction = require('./login');


module.exports = function(req,res){

    //如果添加的话，检测是否登录
    if(!req.session.isLogined){
        loginAction(req,res);
        return;
    }

    if(req.method === 'GET'){
        //返回添加表单页面
        res.end(new AddPager().render());
    }else{
        post(req).then(function(data){

            var errors = {};
            if(!(data.title && data.title.length >= 5)){
                errors.title = 'title char length >= 5';
            }
            if(!(data.body && data.body.length >= 10)){
                errors.body = 'body char length >= 10';
            }

            if(Object.keys(errors).length){
                res.writeHead('Content-Type','text/html');
                res.end(new AddPager(errors,req.session.isLogined).render());
            }else{
                //数据添加成功跳到首页
                database.add(data);
                res.end(new IndexPager(database.list,req.session.isLogined).render());
            }

        });


    }




};