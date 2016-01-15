'use strict';
var LoginPager = require('../views/LoginPager');
var post = require('./post');
var indexAction = require('./index');

module.exports = function(req,res){

    if(req.method === 'GET'){
        //渲染登录视图页
        res.end(new LoginPager().render());
    }else{
        post(req).then(data=>{
            var loginname = data.loginname;
            var password = data.password;

            if(loginname && password && loginname === 'leo' && password === '123456'){
                req.session.isLogined = true;
                indexAction(req, res);
            }else{
                res.end(new LoginPager("登录失败，请重新登录").render());
            }


        });


    }


};
