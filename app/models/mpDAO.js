
function mpDAO(connection){
    this._connection = connection;
}


mpDAO.prototype.retorno = function (pedidoid, callback1){ 
    this._connection.query('INSERT INTO mp (ref) VALUES ('+pedidoid+')');;
}

mpDAO.prototype.links = function (mes, callback){
    this._connection.query('SELECT * FROM cobrancas WHERE mes = '+mes, callback);  
}

mpDAO.prototype.link = function (id, callback){
    
    this._connection.query('SELECT * FROM cobrancas WHERE id = '+id, callback);  
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

