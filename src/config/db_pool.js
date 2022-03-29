const mysql = require('mysql')

module.exports =  {
    createPool: () => {
        return mysql.createPool({
            host: 'mysql.clh0cegn7mjp.ap-northeast-2.rds.amazonaws.com',
            user: 'admin',
            password: 'iLy6wbTk795SXmw',
            database: 'smc_badminton',
            connectionLimit: 50
        })
    }
}