'use strict';
var IndexPager = require('../views/IndexPager');
var database = require('../database');

//首页
module.exports = function(req,res){

    res.end(new IndexPager(database.list,req.session.isLogined).render());


}