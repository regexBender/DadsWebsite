const mysql = require("mysql");

let db;
if (!db) {
    db = mysql.createConnection({
        host    : "localhost",
        user    : "root",
        password: "root",
        database: "dadswebsite"
    });

    db.connect((err) => {
        if (err) {
            console.error('Unable to connect to database: ', err);
            process.exit(1);
            return;
        }
        console.log('connected to database')
    });
}

module.exports = {
    db,
}