

"use strict"
require("dotenv").config();
require("./api/dbconfig/dbconnection")
const express = require("express");
const app = express();
const StudentRouter = require("./api/routes/student.route")
const cors = require("cors");


app.set('x-powered-by', false);
app.use(express.json());
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("logger");
    console.log(req.url);
    res.header(`Access-Control-Allow-Origin`, process.env.CLIENT_URL);
    res.header(`Access-Control-Allow-Headers`, `Origin, XRequested-With, Content-Type, Accept`);
    res.header(`Access-Control-Allow-Methods`, '*');
    next();
})

app.use("/api", StudentRouter)



const server = app.listen(process.env.PORT, () => {
    console.log("server started listening to port ", server.address().port)
})
console.log("server started")