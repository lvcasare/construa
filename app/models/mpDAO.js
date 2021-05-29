
function mpDAO(connection){
    this._connection = connection;
}


mpDAO.prototype.retorno = function (pedidoid, callback1){ 
    this._connection.query('INSERT INTO mp (ref) VALUES (1)');
}

mpDAO.prototype.adicionar = function (pagamento, callback){ 
    this._connection.query('INSERT INTO arquivos SET ?', pagamento, callback);
}

mpDAO.prototype.updateUpload = function (id, z,callback){ 
    this._connection.query('UPDATE arquivos SET img=1, tipo="'+z+'" WHERE id= '+ id, callback);
}

mpDAO.prototype.pagamentos = function (callback){ 
    this._connection.query('SELECT * FROM arquivos ', callback);

}

mpDAO.prototype.del = function (get,callback){ 
    this._connection.query('DELETE FROM arquivos WHERE id = '+get.id, callback);

}



module.exports = function (){
    return mpDAO;//
}

