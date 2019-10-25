const connection = require('../routes/database').db;

function add(a, b) {
    return a + b;
}

function getImages() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `images`", (err, rows, fields) => {
            if (err) {
                console.log("Godzilla")
                reject(err);
            } else {
                console.log("Godzookie")

                resolve(rows);
            }
        });
    });
}

module.exports = {
    add,
    getImages,
};
