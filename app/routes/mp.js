module.exports = function (application){
    

    application.get('/mp_inicio', function (req,res){
        application.app.controllers.mp.inicio(application,req,res);
        
    });

    application.post('/recebepost', function (req,res){
        application.app.controllers.mp.recebepost(application,req,res);
        
    });

    application.get('/enviapost', function (req,res){
        application.app.controllers.mp.enviapost (application,req,res);
        
    });;


    application.get('/mp_links', function (req,res){
        application.app.controllers.mp.links (application,req,res);
        
    });;

    application.get('/mp_link', function (req,res){
        application.app.controllers.mp.link (application,req,res);
        
    });;






}