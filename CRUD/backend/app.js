require('dotenv').config()
const express = require('express')
const cors = require("cors")

const connectToDb = require('./config/db')

const app = express()

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectToDb()
app.get('/', (req, res) => {
    res.send("Hello world");
})

module.exports = app;