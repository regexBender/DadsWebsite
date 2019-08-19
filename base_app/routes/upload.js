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

upload.post('/', urlencodedParser, (req, res, next) => { 

    let file_name = req.body.img_name;
    let label = req.body.label;
    console.log("HERE 1 " + file_name + " " + label ) // file_name + " " + label
    const storage = multer.diskStorage({    
        destination: (req, file, cb) => {
          console.log("HERE 2")
            cb(null, `public/images/${label}`)
        },
        filename: (req, file, cb) => {
          console.log("HERE 3:" + file.name)
          cb(null, file.name)
        }
    })
    
    
    const upload_multer = multer({ storage: storage }).single('file')

    upload_multer(req, res, (err) => {
      console.log(JSON.stringify(req.body.file[path]));
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

module.exports = upload;