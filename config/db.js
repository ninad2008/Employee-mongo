const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Ninad2008:VYSAUEv2VUsEHgYZ@cluster0.uricfp6.mongodb.net/employeeDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const db = mongoose.connection;

module.exports = db;
