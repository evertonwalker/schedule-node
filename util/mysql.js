let mysqlFactory = require('mysql');


class Mysql {

    constructor() {
        this.pool = mysqlFactory.createPool({
            host: process.env.host || '127.0.0.1',
            port: process.env.port || 3306,
            user: process.env.user || 'root',
            password: process.env.password || 'root',
            multipleStatements: true
        });
    }

    Query(sql, values){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if(err) reject(err)
                connection.query(sql, values, (err, result) => {
                    connection.release();
                    if(err) reject(err);
                    resolve(result);
                });
            });
        });
    }

}

module.exports = Mysql;