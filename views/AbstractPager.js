'use strict';

//抽象类，做为基础公用模板
class AbstractPager{

    constructor(){

    }
    _render(){
        throw new Error('子类必须实现');
    }

    render(){

        return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset='utf-8'/>
        <link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css'/>
        </head>
        <body class='container'>
            ${this._render()}
        </body>
        </html>
    `
    }



}

module.exports = AbstractPager;