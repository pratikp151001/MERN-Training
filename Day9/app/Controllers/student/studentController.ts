import { studentmodel } from "../../Models/studentModel/studentModel";
import { Request, Response } from "express";
import StudentRepositary from "../../repository/index"
import { responseModel } from "../../Interface/ResponseInterface";


const getstudent = async (req: Request, res: Response) => {

    try {
       
        let students = await StudentRepositary.StudentRepositary.getstudent()
       // console.log("get studebt called", students)
        let response: responseModel = {
            status: 200,
            data: students,
            error: null,
            message: "Students Get successfully",
        }
        // console.log(response.data)
       

        res.json(response)

    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to get Students",
        }

        res.send(response)

    }
}
const savestudent = async (req: Request, res: Response) => {



    try {
       
        const studentToAdd: studentmodel = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            marks: req.body.marks
        }
        // if (StudentRepositary.StudentRepositary.checkEmail(studentToAdd.email)!=null){
        //      console.log(StudentRepositary.StudentRepositary.checkEmail(studentToAdd.email))
            // console.log("Dc")
        const student = await StudentRepositary.StudentRepositary.AddStudentTODB(studentToAdd)
        console.log(student)
        let response: responseModel = {
            status: 200,
            data: studentToAdd,
            error: null,
            message: "Students Added successfully",
        }

        res.send(response)
    // }else{
    //     let response: responseModel = {
    //         status: 400,
    //         data: null,
    //         error: null,
    //         message: "Students is already Present",
    //     }
    //     res.send(response)

    // }

    } catch (ex) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: ex ,
            message: "Fail to Add student",
        }

        res.send(response)

    }

}

const deletestudent = async (req: Request, res: Response) => {

    try {
        var idtodelete = req.params.id
        const student = await StudentRepositary.StudentRepositary.DeleteStudent(idtodelete)
        let response: responseModel = {
            status: 200,
            data: null,
            error: null,
            message: "Students Deleted successfully",
        }

        res.send(response)
    } catch (error) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Delete student",
        }

        res.send(response)

    }
}

const updatestudent = async (req: Request, res: Response) => {
    console.log("update User called")

    try {
        var idtoupdate = req.params.id
        console.log(idtoupdate)
        
        const studentToUpdate: studentmodel = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            marks: req.body.marks
        }
       
        // const student = await StudentRepositary.StudentRepositary.DeleteStudent(idtodelete)
        const student = StudentRepositary.StudentRepositary.UpdateStudent(studentToUpdate,idtoupdate)
        let response: responseModel = {
            status: 200,
            data: studentToUpdate,
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

export default { getstudent, savestudent, deletestudent ,updatestudent}