const { get } = require("../../config/server");

function pagamentosDAO(connection){
    this._connection = connection;
}


pagamentosDAO.prototype.listar = function (pedidoid, callback1){ 
    this._connection.query('SELECT * FROM pagamentos WHERE pedidoid = ' + pedidoid, callback1);
}

pagamentosDAO.prototype.adicionar = function (pagamento, callback){ 
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

pagamentosDAO.prototype.updateUpload = function (id, z,callback){ 
    this._connection.query('UPDATE pagamentos SET img=1,tipo="'+z+'" WHERE id= '+ id, callback);
}

pagamentosDAO.prototype.pagamentos = function (obra, callback){ 
    console.log('pagamentos: '+ obra)  ;
    this._connection.query('SELECT * FROM pagamentos WHERE obra = "'+ obra +'"', callback);

}

pagamentosDAO.prototype.del = function (get,callback){ 
    this._connection.query('DELETE FROM pagamentos WHERE id = '+get.id, callback);

}


module.exports = function (){
    return pagamentosDAO;//
}

