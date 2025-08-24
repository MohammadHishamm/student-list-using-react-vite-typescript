import express from 'express';
import { studentModel } from '../models/student';

const studentRouter = express.Router();


studentRouter.get("/",async (req,res)=>{
   const students= await studentModel.find()
   res.send(students);
 
});


studentRouter.post("/",async (req,res)=>{
const data = req.body;
console.log({data});
const newstudent = await studentModel.create(data);
newstudent.save();
res.status(201).send(newstudent);
})

studentRouter.put("/:id", async(req,res)=>{
  const id = req.params.id;
  const data = req.body;
  const students = await studentModel.findByIdAndUpdate(id,data,{new: true});

  if(!students){
    return res.status(404).send("Student not found");
  }

  res.send(students);

})

studentRouter.delete("/:id",async (req,res)=>{
    const id = req.params.id;
    const students= await studentModel.findByIdAndDelete(id);
    if(!students){
        return res.status(404).send("Student not found");
    }
    res.send("Student deleted");

})
export default studentRouter;