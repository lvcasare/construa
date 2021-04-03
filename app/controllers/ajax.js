module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia.ejs",{ validacao : {},noticia : {}});// pega url
}

module.exports.ajax = function(application, req, res){

    res.render('home/ajax.ejs');

}


module.exports.ajax1 = function(application, req, res){

    res.render('home/ajax1.ejs');

}

module.exports.cookie = function(application, req, res){

    var get=req.query;

    var cookie = require('cookie');

    // Set a new cookie with the name
    res.setHeader(
        'Set-Cookie', cookie.serialize('obra', String(get.obra),  {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 700 // 1 week
      }),
      'Set-Cookie', cookie.serialize('obran', String(get.obran),  {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 700 // 1 week
      })
      
      
      
      );

      // Parse the cookies on the request
        var cookies = cookie.parse(req.headers.cookie || '');
 
        // Get the visitor name set in the cookie
        var name = cookies.obran;

        console.log(name);
        console.log(get.obran);

      

    



    

    
    
    



    res.render('pedidos/pedidosred.ejs');

    function parseCookies (request) {
        var list = {},
            rc = request.headers.cookie;
    
        rc && rc.split(';').forEach(function( cookie ) {
            var parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    
        return list;
    }

}