
var fs = require('fs');

//定义常量文件路径
const filepath = __dirname+'/data.json';

var list;
//如果抛出异常的话初始化数组
try{
    list = JSON.parse(fs.readFileSync(filepath));  //读取解析json文件数据
}catch(e){
    list = [];
}

module.exports = {
    add(article){
        list.push(article);
        this.store();
    },
    del(index){
        list.splice(index, 1);
        this.store();
    },
    update(index,newArticle){
        list.splice(index,1,newArticle);
        this.store();
    },
    get list(){
        return list;
    },
    /*
     * 持久化是将内存中数据储存在硬盘上
     * fs.writeFile第一参数是文件位置，第二是数据本身，第三是回调函数
     * __dirname表示当前这个程序目录
     * JSON.stringify对数据本身做字符串化
     */
    store(callback){
        callback = callback || function(){};
        fs.writeFile(filepath,JSON.stringify(list),callback);
    }



};



