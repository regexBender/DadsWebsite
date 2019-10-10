const mysql = require("mysql");

let db;

function initDatabase(callback) {
    db = mysql.createConnection({
        host    : "localhost",
        user    : "root",
        password: "root",
        database: "dadswebsite"
    });
    db.connect( (err) => {
        if (err) {
            console.error('Unable to connec to database: ', err);
            process.exit(1);
            return;
        }
        callback();
    });
}

module.exports = {
    db,
    initDatabase
}