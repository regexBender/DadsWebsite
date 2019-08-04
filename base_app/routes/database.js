const assert = require("assert");
const mysql = require("mysql");

let _db;

module.exports = {
    database
}

function database() {
    if (_db) {
        return _db;
    }

    _db = mysql.createConnection({
        host    : "localhost",
        user    : "root",
        password: "root",
        database: "dadswebsite"
    });

    _db.connect( (err) => {

        if (err) {
            console.log(err);
            return(err);
        }

        console.log("Connected to database");
    });

    return _db;
}

database() // Singleton instance
