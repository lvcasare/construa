module.exports.pedidos = function(application, req, res){
    
    
    module = require('readcookie.js');
    var obra = module.cook(req);
    if (obra==null) obra ='nova'; 
    
    var get=req.query;
    
    var connection = application.config.dbConnection();   

    var pedidosModel = new application.app.models.pedidosDAO(connection);       
    
    var callback = function(erro,result){
            //console.log(result);
            res.render('pedidos/pedidos.ejs',{pedidos:result,obra:obra});;
            };        
    pedidosModel.carregarTodos(obra,callback);
}


module.exports.deletar = function(application, req, res){
    var get=req.query;
    
    var connection = application.config.dbConnection();   

    var pedidosModel = new application.app.models.pedidosDAO(connection);       
    
    var callback = function(erro,result){
            //console.log(result);
            res.redirect('/pedidos');;
            };        
    pedidosModel.deletar(get.id, callback);
}