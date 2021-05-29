module.exports.inicio = function(application, req, res){

    var get=req.query;
    var link = '';
            console.log (get);
            title = "Curso Domine a Arte de Ler - "+get['email'];

            const axios = require('axios')

            axios
            .post('https://api.mercadopago.com/checkout/preferences?access_token=TEST-7360931303703983-082420-403bd4058ccb931c56962684437df3e7-44599713', 
                {   
                "notification_url":"https://webhook.site/2035bc56-1123-4e6b-8871-64ebfe713853",
                "external_reference": get['external_reference'],
            "items":    [
                            {
                            "title": title,
                            "description": title,
                            "quantity":1,
                            "currency_id":"BRL",
                            "unit_price":get['unit_price']*1,
                            "picture_url":"https://poderdalinguagem.com/inscricao/img/logo%20curso.png"
                            }
                        ]
                }
                
                )
            .then((res) => {
                //console.log(`statusCode: ${res.statusCode}`)
                //console.log(res)
                console.log(res.data);
                link=res.data.sandbox_init_point;
                //res.render(res.data['sandbox_init_point']);
                c();

            })
            .catch((error) => {
                console.error(error)
            })
            //link='https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=44599713-a3b19f1f-148f-44e5-bc36-1b2744441141';
    
            console.log(link);
            console.log('link');
            //res.redirect(link);;;

            function c(){
                res.redirect(link);;;

            }           
            }


            module.exports.return = function(application, req, res){

                
                var get=req.query;
                
                var connection = application.config.dbConnection();   
            
                var mpModel = new application.app.models.mpDAO(connection);       
                
                var callback = function(erro,result){
                        //console.log(result);
                        //res.redirect('/pedidos');;
                        };        
                mpModel.retorno(1, callback);

                res.render('home/ajax1.ejs');

                





            }


            module.exports.return1 = function(application, req, res){                
                const axios = require('axios')
                console.log('post enviará');
            axios
            .post('http://localhost:3000/mp_return', 
            {   
            "notification_url":"https://webhook.site/2035bc56-1123-4e6b-8871-64ebfe713853",
            "external_reference": '',
        "items":    [
                        {
                        "title": 'title',
                        "description": 'title',
                        "quantity":1,
                        "currency_id":"BRL",
                        "unit_price":'',
                        "picture_url":"https://poderdalinguagem.com/inscricao/img/logo%20curso.png"
                        }
                    ]
            }
            
            )
            .then((res) => {
                //console.log(`statusCode: ${res.statusCode}`)
                console.log('post sent')
                
                //console.log(res.data);
                //link=res.data.sandbox_init_point;
                //res.render(res.data['sandbox_init_point']);
                

            })
            .catch((error) => {
                console.error(error)
                console.log('********************************************************************************')
                console.log('error')
            })
            }