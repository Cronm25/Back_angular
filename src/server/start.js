const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const {dbConnectMySql} =require("../config/db.js")
const app = express();

app.use(cors())
app.use(express.json())
// require("../models/user.model.js"); /*Se utiliza para crear las tablas*/


// app.use("/user",require("../routes/user.router.js"))
app.use('/api',require('../routes/api_users.js'))
app.use('/api',require('../routes/api_comments.js'))



// const router = require("../router/product.router")
// app.use("/api/v1", router)
dbConnectMySql()  // se conecta a la base de datos y comprueba 
module.exports = app;