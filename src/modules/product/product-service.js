const db = require('../../infraestructure/product-dao.js');

const TABLA = 'products';

function list(){
    return db.list(TABLA);
}

function selectById(id){
    return db.selectById(TABLA,id);
}

function add(body){
    return db.add(TABLA,body);
}
module.exports = {
 list,selectById,add
}