'use strict';
var AbstractPager = require('./AbstractPager');

//定义子类继承抽象类，实现抽象类的方法
class LoginPager extends AbstractPager{

    constructor(errors){
        super();
        this.errors = errors || '';
    }

    _render(){

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';

        return `
        <form action="/login" method="post">
          <div>${this.errors}</div>
          <div class="form-group">
            <label for="loginname">登录名称</label>
            <input type="text" class="form-control" name="loginname" placeholder="登录名称">
          </div>
          <div class="form-group">
            <label for="password">登录密码</label>
            <input type="text" class="form-control" name="password" placeholder="登录密码">
          </div>

          <button type="submit" class="btn btn-default">登录</button>
        </form>

        `

    };


}

module.exports = LoginPager;
