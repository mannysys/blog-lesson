
var fs = require('fs');

//���峣���ļ�·��
const filepath = __dirname+'/data.json';

var list;
//����׳��쳣�Ļ���ʼ������
try{
    list = JSON.parse(fs.readFileSync(filepath)); //��ȡ����json�ļ�����
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
     * �־û��ǽ��ڴ������ݴ�����Ӳ����
     * fs.writeFile��һ�������ļ�λ�ã��ڶ������ݱ��������ǻص�����
     * __dirname��ʾ��ǰ�������Ŀ¼
     * JSON.stringify�����ݱ������ַ�����
     */
    store(callback){
        callback = callback || function(){};
        fs.writeFile(filepath,JSON.stringify(list),callback);
    }



};



