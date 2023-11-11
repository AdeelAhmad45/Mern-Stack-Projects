require('dotenv').config();
const express = require('express')
const cors = require("cors")

const connectToDb = require('./config/db')
const app = express();

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectToDb()

const userRoutes = require('./routes/userRoutes')
app.use('/', userRoutes)

module.exports = app;