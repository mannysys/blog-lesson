'use strict';

var EditPager = require('../views/EditPager');
var database = require('../database');
var query = require('./query');
var post = require('./post');
var indexAction = require('./index');

//更新文章
module.exports = function(req, res){
    // get - open update page
    if(req.method === 'GET'){
        var id = query(req).id;
        var article = database.list[id];
        var errors = {};
        res.end(new EditPager(id,article,errors).render());

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

