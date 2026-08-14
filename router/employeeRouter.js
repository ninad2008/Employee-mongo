const express=require("express");

const Employee=require("../models/Employee");

const router=express.Router();

router.get("/",(request,response)=>{
    try{
       const employees=Employee.find({});
       response.status(200).json(employees);
    }catch(error){
       response.status(500).json({message:error.message});
    }
});

router.get("/:id",async(request,response)=>{
    try{
        const employee=await Employee.findById(request.params.id);
        response.status(200).json(employee);

    }catch(error){
        response.status(500).json({message:error.message});
    }
})

router.post("/",async(request,response)=>{
    try{
        const{name,email,department,salary,role}=request.body;
        if(!name){
            return response.status(400).json({message:"All fields are required"});
        }
        else if(!email){
            return response.status(400).json({message:"All fields are required"});
        }
        else if(!department){
            return response.status(400).json({message:"All fields are required"});
        }
        else if(!salary){
            return response.status(400).json({message:"All fields are required"});
        }
        else if(!role){
            return response.status(400).json({message:"All fields are required"});
        }
        const newEmployee={
            name:request.body.name,
            email:request.body.email,
            department:request.body.department,
            salary:request.body.salary,
            role:request.body.role
        };
        const employee=new Employee.create(newEmployee);
        await employee.save();
        response.status(201).json(employee);
    
    }catch(error){
        response.status(500).json({message:error.message});
    }
})

router.put("/:id",async(request,response)=>{
    try{
        const employee=await Employee.findByIdAndUpdate(request.params.id,request.body,{new:true});
        response.status(200).json({message: "Employee Updated Successfully", employee});
    } catch(error){
        response.status(500).json({message:error.message});
    }
})

router.delete("/:id",async(request,response)=>{
    try{
        const employee=await Employee.findByIdAndDelete(request.params.id);
        response.status(200).json({message:"Employee Deleted Successfully",employee});
    } catch(error){
        response.status(500).json({message:error.message});
    }
})

module.exports=router;