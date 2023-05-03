import exp from "constants";
import { Request,Response } from "express";


const getstudent =async (req:Request,res:Response)=>{

    console.log("getstudentcalled")
}
const savestudent =async (req:Request,res:Response)=>{

    console.log("savestudentcalled")
}

export default {getstudent,savestudent}