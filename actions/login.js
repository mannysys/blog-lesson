'use strict';
var LoginPager = require('../views/LoginPager');
var post = require('./post');
var indexAction = require('./index');

module.exports = function(req,res){

    if(req.method === 'GET'){
        //äÖÈ¾µÇÂ¼ÊÓÍ¼Ò³
        res.end(new LoginPager().render());
    }else{
        post(req).then(data=>{
            var loginname = data.loginname;
            var password = data.password;

            if(loginname && password && loginname === 'leo' && password === '123456'){
                req.session.isLogin = true;
                indexAction(req, res);
            }else{
                res.end(new LoginPager("µÇÂ¼Ê§°Ü£¬ÇëÖØÐÂµÇÂ¼").render());
            }


        });


    }


};