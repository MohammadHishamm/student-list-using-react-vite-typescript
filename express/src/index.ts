import express from "express";
import mongoose from "mongoose";
import studentRouter from "./router/students";
import cors from "cors";


const app= express();
const port = 5000;
mongoose.connect("mongodb://localhost:27017/students").then(()=>{  console.log("Connected to MongoDB")});

app.use(cors({                        //middleware
    origin: "http://localhost:5173"
}));
app.use(express.json());             //middleware


app.use("/students", studentRouter);


app.listen(port,()=>{
   console.log(`Server is running on port ${port}`);
})

