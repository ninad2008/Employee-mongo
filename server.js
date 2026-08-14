const express = require('express');
const db=require('./config/db');
const cors=require('cors')
const employeeRouter=require('./router/employeeRouter');

const app = express();
app.use(cors('*'));
app.use(express.json());
app.use("/employees", employeeRouter);

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});
