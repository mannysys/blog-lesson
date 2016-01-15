'use strict';
var database = require('../database');
var getId = require('./getId');
var indexAction = require('./index');
var loginAction = require('./login');

module.exports = function del(req, res){
    //如果删除的话，检测是否登录
    if(!req.session.isLogined){
        loginAction(req,res);
        return;
    }

    getId(req, id=>{
        database.del(id);
        indexAction(req,res);
    });


}