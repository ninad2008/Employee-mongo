const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devdharesulochana_db_user:4LsF6wQEreZ@X6i@cluster0.uricfp6.mongodb.net/?appName=Cluster0')

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});

db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
});

db.on("error",(err)=>{
    console.log("MongoDB connection error: ",err);
});

module.exports = db;
