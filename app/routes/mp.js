module.exports = function (application){
    

    application.get('/mp_inicio', function (req,res){
        application.app.controllers.mp.inicio(application,req,res);
        
    });

    application.post('/mp_return', function (req,res){
        application.app.controllers.mp.return(application,req,res);
        
    });

    application.get('/mp_return1', function (req,res){
        application.app.controllers.mp.return1(application,req,res);
        
    });;





}