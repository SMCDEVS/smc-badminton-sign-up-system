const mysql = require('mysql')

module.exports =  {
    createPool: () => {
        return mysql.createPool({
            host: 'hostname',
            user: 'user',
            password: 'password',
            database: 'database',
            connectionLimit: 50
        })
    }
}