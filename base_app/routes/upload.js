const express = require('express');
const multer = require('express-fileupload');
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
    
    
    // From: https://codeburst.io/asynchronous-file-upload-with-node-and-react-ea2ed47306dd
    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/images/${label}/${file_name}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({file: `public/${req.body.filename}.jpg`});
    });

});

module.exports = upload;