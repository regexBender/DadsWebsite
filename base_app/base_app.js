const express = require('express')
const database = require('./routes/database').database
const gallery = require('./routes/gallery')
const login = require('./routes/login')

const base_app = express()
const connection = database()

base_app.use("/gallery", gallery)
base_app.use("/login", login)

const port = 3001

base_app.get('/', (req, res) => {
    res.send('root route of CarlLandow.com')
});

base_app.listen(port, () => {
    console.log(`base_app listening on port ${port}!`)
})
