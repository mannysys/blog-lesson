'use strict'; //使用ES6要加入头部信息
var AbstractPager = require('./AbstractPager');


//定义子类继承抽象类，实现抽象类的方法
class IndexPager extends AbstractPager{

    constructor(articleList,isLogined){
        super(isLogined);
        this.list = articleList;
    }

    _render() {
        //将数组合并
        let listDOMString = this.list.map( (article,index) => ` <li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p>
            <div class="${this.isLogined ? '' : 'hidden'}">
                <a href="/del?id=${index}"> DEL </a>
                <a href="/update?id=${index}"> UPDATE </a>
            </div>

        </li>`).join('');

        return `

            <ul class="list-group">
                ${listDOMString}
            </ul>
        `;

    }

}

module.exports = IndexPager;
