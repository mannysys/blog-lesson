'use strict';
var LoginPager = require('../views/LoginPager');
var post = require('./post');
var indexAction = require('./index');

module.exports = function(req,res){

    if(req.method === 'GET'){
        //��Ⱦ��¼��ͼҳ
        res.end(new LoginPager().render());
    }else{
        post(req).then(data=>{
            var loginname = data.loginname;
            var password = data.password;

            if(loginname && password && loginname === 'leo' && password === '123456'){
                req.session.isLogin = true;
                indexAction(req, res);
            }else{
                res.end(new LoginPager("��¼ʧ�ܣ������µ�¼").render());
            }


        });


    }


};