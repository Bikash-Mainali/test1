"use strict"


const studentController = require("../controllers/student.controller")
const express =require("express");
const StudentRoutes = express.Router();




StudentRoutes.route("/students")
.get(studentController.getAll)

StudentRoutes.route("/students/:studentId")
.get(studentController.getOne)
.delete(studentController.deleteOne)


module.exports = StudentRoutes