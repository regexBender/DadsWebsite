const connection = require('../routes/database').db;

function add(a, b) {
    return a + b;
}

function getImages() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `images`", (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function getLastInsertedRow() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `images` WHERE id = LAST_INSERT_ID()", (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    });
}

function insertImage(name, label) {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO `images` SET ?", {name: name, label: label}, (err, rows, fields) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                try {
                    const addedImageRow = getLastInsertedRow();
                    resolve(addedImageRow);
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            }   
        });
    });
}

module.exports = {
    add,
    getImages,
    getLastInsertedRow,
    insertImage
};
