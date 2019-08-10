const express = require('express')
const assert = require("assert");
const mysql = require("mysql");

let _db;
const database_express_loader = express();

module.exports = {
    database
}

function database(next) {
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
            console.log("\n");
            console.log(err);

            console.log("\n");
            console.log("Remember to start the database.");

            return err;
        }

        console.log("Connected to database");
    });

    return _db;
}

database_express_loader.use( (req, res, next) => {
    database() // Singleton instance
    next();
})

