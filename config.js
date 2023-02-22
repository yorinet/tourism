
const dbConnect = mysql.createConnection({
    host: 'https://www.db4free.net',
    user: 'usertourism',
    password: 'pwdtourism',
    port: '3306',
    database: 'dbtourism',
})

dbConnect.connect((error) =>{
    if(error){ console.log(error) } 
    else { console.log("Mysql is connected ...") }
})

module.exports = dbConnect;
