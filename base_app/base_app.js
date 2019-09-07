const express = require('express')
const database = require('./routes/database').database
const gallery = require('./routes/gallery')
const login = require('./routes/login')
const upload = require('./routes/upload')
const fileUpload = require('express-fileupload');
const cors = require('cors');

const base_app = express()
const connection = database()

base_app.use(fileUpload);
base_app.use(cors());

base_app.use("/gallery", gallery)
base_app.use("/login", login)
base_app.use("/upload", upload)

const port = 3001

base_app.get('/', (req, res) => {
    res.send('root route of CarlLandow.com')
});

const server = base_app.listen(port, () => {
    console.log(`base_app listening on port ${port}!`)
})



// Quit the app gracefully
function endDatabaseConnection(callback) {
    console.log("\n");
    console.log("Closing the database connection...");
    connection.end();
    callback();
}

function endServer(callback) {
    console.log("\n");
    console.log("Closing the node server...");
    server.close();
    callback();
}

function killProcess() {
    console.log("\n");
    console.log("Exiting the process...");
    process.exit();
}


process.on("SIGINT", () => {

    console.log("\n");
    console.log("----------------------------------------------");
    console.log("Caught interrupt signal");
    endDatabaseConnection(() => {
        console.log("The database connection is closed.");
        
        endServer(() => {
            console.log("The node server is closed.")
            killProcess();
        });
    });

});