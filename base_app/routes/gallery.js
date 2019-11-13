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

gallery.post("/", urlencodedParser, async (req, res, next) => {

    let name = req.body.img_name;
    let label = req.body.label;

    try {
        const addedImageRow = await insertImage(name, label);
        console.log(`${label}/${name} added to the database`);
        console.log("Godzilla 1");
        console.log(addedImageRow);
        res.json(addedImageRow);
        res.status(201);
    } catch (err) {
        console.log("Mothra 1");
        res.status(500);
        res.json(err);
    }

})

module.exports = gallery; 