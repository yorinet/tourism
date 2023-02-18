const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'db4free.net',
    user: 'usereasyapp',
    password: 'pwdeasyapp',
    port: '3306',
    database: 'dbeasyapp',
})

dbConnect.connect((error) =>{
    if(error){ console.log(error) } 
    else { console.log("Mysql is connected ...") }
})

module.exports = dbConnect;
