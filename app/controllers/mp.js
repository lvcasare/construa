module.exports.inicio = function(application, req, res){

    var get=req.query;
    var link = '';
            console.log (get);
            title = "Curso Domine a Arte de Ler - "+get['email'];

            const axios = require('axios')

            axios
            .post('https://api.mercadopago.com/checkout/preferences?access_token=TEST-7360931303703983-082420-403bd4058ccb931c56962684437df3e7-44599713', 
                {   
                "notification_url":"http://52.67.220.198:3000/recebepost",
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
/////////////////////////////////////////////////////////////////////////////////////////////////

            module.exports.enviapost = function(application, req, res){   
                var link = '';             
                const axios = require('axios')
                console.log('post enviará');
            axios
            .post('http://localhost:3000/recebepost', 
            {
                "action": "payment.created1",
                "api_version": "v1",
                "data": {
                  "id": "1237151624"
                },
                "date_created": "2021-05-27T22:08:24Z",
                "id": 7455388554,
                "live_mode": false,
                "type": "payment",
                "user_id": "44599713"
              }
            
            )
            .then((res) => {
                //console.log(`statusCode: ${res.statusCode}`)
                
                
                //console.log(res.data);
                //link=res.data.sandbox_init_point;
                //res.render(res.data['sandbox_init_point']);
                //console.log('********************************************************************************')
                console.log('post sent')
                link=res.data;
                //res.render(res.data['sandbox_init_point']);
                //c();
                

            })
            .catch((error) => {
                //console.error(error)
                console.log('********************************************************************************')
                console.log('error')
            })

            function c(){
                res.render(link);

            } 
            }



            //////////////////////////////////////////////////////////////
            module.exports.recebepost = function(application, req, res){

                var data = '';
                req.on('data', function(chunk) { 
                  data += chunk;
                });
                req.on('end', function() {
                  req.rawBody = data;
                  console.log (req.rawBody);

                  const obj = JSON.parse(req.rawBody);
                  console.log (obj.data.id);


                  var connection = application.config.dbConnection();   
            
                var mpModel = new application.app.models.mpDAO(connection);       
                
                var callback = function(erro,result){
                        //console.log(result);
                        //res.redirect('/pedidos');;
                        };        
                mpModel.retorno(obj.data.id, callback);

                res.render('home/ajax1.ejs');;
                  
                });


                
                //var get=res.query;
                //var post = req.body;
                //var get = req.query

                //console.log (post);
                ;
                
                
                         





            }