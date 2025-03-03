const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db')
const consign = require('consign')

consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.db = db



app.listen(5000, ()=>{
    console.log("servidor rodando")
});