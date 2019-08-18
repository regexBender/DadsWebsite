const express = require('express');
const multer = require('multer');
const cors = require('cors');

const upload = express.Router();


const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });


upload.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

upload.use(cors());

app.post('/upload', (req, res) => { 

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, `public/images/${file.label}`)
      },
      filename: (req, file, cb) => {
        cb(null, file.file_name)
      }
    })
    
    
    const upload_multer = multer({ storage: storage }).single('file')

    upload_multer(req, res, (err) => {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

module.exports = upload;