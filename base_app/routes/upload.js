const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const fs = require('fs');
const connection = require('../routes/database').db;
const helpers = require('../lib/helpers');

const upload = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

upload.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body)
    cb(null, `../react_app/public/`)
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, file.originalname)
  }
});


const store = multer({ storage: storage }).single('file');

upload.post('/',  (req, res, next) => {
  let mode = "ADD";
  let updateID = 0;

  
  store(req, res, (err) => {
    connection.query("SELECT * FROM images WHERE ?", {
      name: req.body.img_name
    }, (err, rows, fields) => {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
        return next(err);
      }
  
      if (rows.length != 0) { // The name is already in the database
        mode = "REPLACE"
        updateID = rows[0].id
      }
  
    })


    if (err instanceof multer.MulterError) {
      console.log("A Multer error occurred when uploading: " + err);
    } else if (err) {
      console.log(err);
    } else {
      console.log(req.file)
      console.log(`img_name: ${req.body.img_name}`)
      console.log(`file name: ${req.file.filename}`)

      const reactPath = `images\\${req.body.label}\\${req.file.filename}`
      const newPath = req.file.destination.concat(reactPath);
      console.log(newPath);
      fs.renameSync(req.file.path, newPath);

      if (mode == "ADD") {
        connection.query("INSERT INTO images SET ?", {
          name  : req.body.img_name,
          label : req.body.label,
          path  : reactPath
        })
      } else {
        connection.query(`UPDATE INTO images SET ? WHERE ?`, [
          {
            name  : req.body.img_name,
            label : req.body.label,
            path  : reactPath
          }, 
          {
            id    : updateID
          }
        ])
      }
      
    
      res.status(200);
      res.json("file added");
      console.log("file added");
    }
  })

});

module.exports = upload;