"use strict";


const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Student = require("../models/student.model")

const getAll = function (req, res) {
    console.log("get all students controller")

    let count = 5;
    let offset = 0;
    const maxCount = 10;

    const response = { status: 200, message: null }
    if (req.query && req.count) {
        count = parseInt(req.query.count);
    }
    if (req.query && req.count) {
        offset = parseInt(req.query.offset);
    }
    if (maxCount < count) {
        response.status = 400;
        response.message = `count must be less than ${maxCount}`;
    }

    if (isNaN(count) || isNaN(offset)) {
        response.status = 400;
        response.message = `offset and count must be digit`;
        res.status(response.status).json(response.message);
        return;
    }

    Student.find().sort({student_id:-1, class_id:-1}).skip(offset).limit(count).sort({ _id: -1 }).exec(function (err, students) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            response.status = 200;
            response.message = students;
        }
        res.status(response.status).json(response.message);

    })
}


const getOne = function (req, res) {
    console.log("get one student controller")
    const studentId = req.params.studentId;
    if (mongoose.isValidObjectId(studentId)) {
        Student.findById(studentId).exec(function (err, student) {
            const response = { status: 200, message: student }
            if (err) {
                response.status = 500;
                response.message = err;
            } else if (!student) {
                response.status = 404;
                response.message = `{message:Student id  ${studentId} is not found}`;
            }
            else {
                res.status(response.status).json(response.message)
            }

        })
    }
    else {
        res.status(400).json("bad request: student id is invalid")
    }
}



//delete
const deleteOne = function (req, res) {
    console.log("delete one student controller")
    const studentId = req.params.studentId;
    if (mongoose.isValidObjectId(studentId)) {
        Student.findByIdAndDelete(studentId).exec(function (err, student) {
            const response = { status: 204, message: student }
            if (err) {
                response.status = 500;
                response.message = err;
            } else if (!student) {
                response.status = 404;
                response.message = `{message:Student id  ${studentId} is not found}`;
            }

            res.status(response.status).json(response.message)

        })
    }
    else {
        res.status(400).json("bad request: Student id is invalid")
    }
}


module.exports = {
    getAll,
    getOne,
    deleteOne
}