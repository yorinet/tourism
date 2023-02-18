const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'www.000webhost.com',
    user: 'id20315808_usertourism',
    password: 'P=fS~L-k0tJ_godu',
    port: '8889',
    database: 'id20315808_tourism',
})

dbConnect.connect((error) =>{
    if(error){ console.log(error) } 
    else { console.log("Mysql is connected ...") }
})

module.exports = dbConnect;
