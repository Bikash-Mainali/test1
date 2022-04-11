"use strict"


require("dotenv").config()
const mongoose = require("mongoose");


const scoreSchema = mongoose.Schema({
    type:String,
    score: Number
})
const studentSchema = mongoose.Schema(
    {
        student_id: Number,
        class_id: Number,
        scores: [scoreSchema]

    })


module.exports = mongoose.model(process.env.DB_MODEL, studentSchema, process.env.COLLECTION_NAME)