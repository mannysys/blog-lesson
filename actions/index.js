'use strict';
var IndexPager = require('../views/IndexPager');
var database = require('../database');

//��ҳ
module.exports = function(req,res){

    res.end(new IndexPager(database.list).render());


}