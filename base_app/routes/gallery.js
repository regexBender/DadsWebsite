const express = require('express')
const connection = require('../routes/database').db;
const helpers = require('../lib/helpers');

const bodyParser = require("body-parser");

const gallery = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


gallery.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

gallery.get("/", urlencodedParser, async (req, res, next) => {
    try {
        const images = await helpers.getImages();
        res.status(200);
        res.json(images);
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

gallery.post("/", urlencodedParser, (req, res, next) => {

    let name = req.body.img_name;
    let label = req.body.label;

    connection.query("INSERT INTO `images` SET ?", {name: name, label: label}, (err, rows, fields) => {
        if (err) {
            res.status(400);
            res.send(err);
            console.log(err);
            return next(err);
        }

        res.status(201);
        console.log(`${label}/${name} added to the database`);
        connection.query("SELECT * FROM `images` WHERE id = LAST_INSERT_ID()", (err, rows, fields) => {
            res.json(rows[0]);
        });
    });

})

module.exports = gallery; 