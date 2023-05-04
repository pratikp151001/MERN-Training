import { staffmodel } from "../../Models/staffModel/staffModel";
import { Request, Response } from "express";
import StaffRepositary from "../../repository/index"
import { responseModel } from "../../Interface/ResponseInterface";

const getStaff=async(req:Request,res:Response)=>{
    try{
    let staff = await StaffRepositary.StaffRepository.getstaff()

    let response: responseModel = {
        status: 200,
        data: staff,
        error: null,
        message: "Students Get successfully",
    }
    res.send(response)
    }
    catch (error)
    {
        let response: responseModel = {
            status: 200,
            data: null,
            error: error as string,
            message: "Fail to get staff",
        }
        res.send(response)

    }
}
const SaveStaff=async(req:Request,res:Response)=>{
    console.log("Save Satff called")
    try{
        const staffToAdd: staffmodel = {
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary,
            favStudent: req.body.favStudentID
        }

    let staff = await StaffRepositary.StaffRepository.AddStaffTODB(staffToAdd)

    let response: responseModel = {
        status: 200,
        data: staff,
        error: null,
        message: "Staff Posted successfully",
    }
    res.send(response)
    }
    catch (error)
    {
        console.log(error)
        let response: responseModel = {
            
            status: 200,
            data: null,
            error: error as string,
            message: "Fail to post staff",
        }
        res.send(response)

    }
}

const deletestaff = async (req: Request, res: Response) => {
console.log("Delete controller called")
    try {
        var idtodelete = req.params.id
        const student = await StaffRepositary.StaffRepository.DeleteStaff(idtodelete)
        let response: responseModel = {
            status: 200,
            data: null,
            error: null,
            message: "Staff Deleted successfully",
        }

        res.send(response)
    } catch (error) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Delete Staff  ",
        }

        res.send(response)

    }
}


const updatestaff = async (req: Request, res: Response) => {
    console.log("update Satff called")

    try {
        var idtoupdate = req.params.id
        console.log(idtoupdate)
        
        const staffToAdd: staffmodel = {
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary,
            favStudent: req.body.favStudentID
        }
       
        // const student = await StudentRepositary.StudentRepositary.DeleteStudent(idtodelete)
        const student =await StaffRepositary.StaffRepository.UpdateStaff(staffToAdd,idtoupdate)
        let response: responseModel = {
            status: 200,
            data: staffToAdd,
            error: null,
            message: "Students Updated successfully",
        }

       
        res.send(response)
    } catch (error) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Update student",
        }

        res.send(response)

    }
}

export default {getStaff,SaveStaff,deletestaff,updatestaff}

