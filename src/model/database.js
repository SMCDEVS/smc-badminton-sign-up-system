const pool = require('../config/db_pool').createPool()

module.exports = {
    executeQuery: (sql, objects=[]) => {
        pool.getConnection((err, connection) => {
            if(err)
                throw err

            connection.query(sql, objects,
                (error) => {

                    if (error)
                        throw error

                })
        })
    },

    execute: (sql) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err)
                    reject(err)

                connection.query(sql,
                    (error, results) => {

                        if (error)
                            reject(error)

                        resolve(results)
                    })
            })
        })
    }
}