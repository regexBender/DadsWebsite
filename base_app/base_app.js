const express = require('express')
const database = require('./routes/database').database
const login = require('./routes/login')

const base_app = express()
const connection = database()

base_app.use("/routes/login", login)

const port = 3001

base_app.get('/', (req, res) => {
    res.send('Hello World!')
});

base_app.listen(port, () => {
    console.log(`base_app listening on port ${port}!`)
})
