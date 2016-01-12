'use strict';
var AbstractPager = require('./AbstractPager');

//定义子类继承抽象类，实现抽象类的方法
class AddPager extends AbstractPager{

    constructor(errors){
        super();
        this.errors = errors || {};
    }

    _render(){

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';

        return `
        <form action="/add" method="post">
          <div class="form-group">
            <label for="title">标题</label>
            <input type="text" class="form-control" name="title" id="title" placeholder="标题">
            <p>${titleError}</p>
          </div>
          <div class="form-group">
            <label for="body">内容</label>
            <textarea class="form-control" name="body" id="body" placeholder="内容"></textarea>
            <p>${bodyError}</p>
          </div>

          <button type="submit" class="btn btn-default">添加</button>
        </form>

        `

    };


}

module.exports = AddPager;