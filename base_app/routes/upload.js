const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const fs = require('fs');

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
  store(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log("A Multer error occurred when uploading: " + err);
    } else if (err) {
      console.log(err);
    } else {
      console.log(req.file)
      console.log(`img_name: ${req.body.img_name}`)
      console.log(`file name: ${req.body.img_name}`)
      
      req.file.filename = req.body.img_name;
      fs.renameSync(req.file.path, 
        req.file.path.replace(/\w+?\./, `images\\${req.body.label}\\${req.body.img_name}.`)
      );
      console.log(req.file)
      console.log(req.file.path.replace(/\w+?\./, req.body.img_name + '.'));
      res.status(200);
      res.json("file added");
      console.log("file added 2");
    }
  })
  
});

module.exports = upload;