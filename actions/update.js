'use strict';

var EditPager = require('../views/EditPager');
var database = require('../database');
var query = require('../utils/query');
var post = require('../utils/post');
var indexAction = require('./index');
var loginAction = require('./login');

//更新文章
module.exports = function(req, res){
    //如果删除的话，检测是否登录
    if(!req.session.isLogined){
        loginAction(req,res);
        return;
    }

    // get - open update page
    if(req.method === 'GET'){
        var id = query(req).id;
        var article = database.list[id];
        var errors = {};
        res.end(new EditPager(id,article,errors,req.session.isLogined).render());

    }else{
    // post - update with database
        post(req).then(data=>{
            let id = data.id;
            delete data.id;
            database.update(id,data);
            indexAction(req,res); //返回首页
        });



    }


};

