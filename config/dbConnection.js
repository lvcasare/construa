

var mysql = require ('mysql');

var connMysql = function(){

return mysql.createConnection({    
    host: 'mysql.construasuacasa.kinghost.net',
    user: 'construasuacas',
    password:'fjsjfhsahd5157YTRcccGr',
    database: 'construasuacas'
});

};

module.exports = function(){
    return connMysql;
}





