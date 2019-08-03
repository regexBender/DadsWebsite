const express = require('express')
const database = require('./routes/database')

const base_app = express()
const login = require('./routes/login')
const connection = database()

app.use("/routes/login", login)

const port = 3001

base_app.get('/', (req, res) => {
    res.send('Hello World!')
});

base_app.listen(port, () => console.log(`Example app listening on port ${port}!`))
