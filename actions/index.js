'use strict';
var IndexPager = require('../views/IndexPager');
var database = require('../database');

//Ê×Ò³
module.exports = function(req,res){

    res.end(new IndexPager(database.list).render());


}