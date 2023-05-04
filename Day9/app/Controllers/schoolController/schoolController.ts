import { SchoolModel } from "../../Models/schoolModel/schoolModel"
import { Request, Response } from "express";
import SchoolRepo from "../../repository/index"
import { responseModel } from "../../Interface/ResponseInterface";


const getschool = async (req: Request, res: Response) => {
    console.log("get School Called")

    try {
        let Course = await SchoolRepo.SchoolRepo.getSchool()

        let response: responseModel = {
            status: 200,
            data: Course,
            error: null,
            message: "School Get successfully",
        }
        res.send(response)
    }
    catch (error) {
        console.log(error)
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to get School",
        }
        res.send(response)

    }
}


const SaveSchool = async (req: Request, res: Response) => {
    console.log("Save school called")
    try {
        const SchoolToAdd: SchoolModel = {
            address: req.body.address,
            schoolNAme: req.body.schoolNAme,
            studentId:req.body.studentId,
            studentsIds: req.body.studentsIds
        }

        console.log(SchoolToAdd)

        let course = await SchoolRepo.SchoolRepo.AddSchoolTODB(SchoolToAdd)

        let response: responseModel = {
            status: 200,
            data: course,
            error: null,
            message: "School Posted successfully",
        }
        res.send(response)
    }
    catch (error) {
        console.log(error)
        let response: responseModel = {

            status: 200,
            data: null,
            error: error as string,
            message: "Fail to post School",
        }
        res.send(response)

    }
}


const deleteSchool = async (req: Request, res: Response) => {
    console.log("Delete school controller called")
    try {
        var idtodelete = req.params.id
        const school = await SchoolRepo.SchoolRepo.deleteSchool(idtodelete)
        let response: responseModel = {
            status: 200,
            data: null,
            error: null,
            message: "Course Deleted successfully",
        }

        res.send(response)
    } catch (error) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Delete Course",
        }

        res.send(response)

    }
}

const updateSchool = async (req: Request, res: Response) => {
    console.log("update school called")

    try {
        var idtoupdate = req.params.id
        console.log(idtoupdate)
        const SchoolToAdd: SchoolModel = {
            address: req.body.address,
            schoolNAme: req.body.schoolNAme,
            studentId:req.body.studentId,
            studentsIds: req.body.studentsIds

        }

        // const student = await StudentRepositary.StudentRepositary.DeleteStudent(idtodelete)
        const Course = await SchoolRepo.SchoolRepo.UpdateSchool(SchoolToAdd, idtoupdate)
        let response: responseModel = {
            status: 200,
            data: Course,
            error: null,
            message: "Course Updated successfully",
        }


        res.send(response)
    } catch (error) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Update Course",
        }

        res.send(response)

    }
}


const SearchAPI = async (req: Request, res: Response) => {
    console.log("Search APi Called")
    try {
        var sortBy = req.params.sortBy
        console.log(sortBy)
        let course = await SchoolRepo.SchoolRepo.search(sortBy)
        // console.log("get studebt called", students)
        let response: responseModel = {
            status: 200,
            data: course,
            error: null,
            message: "School Get successfully",
        }
        // console.log(response.data)


        res.json(response)

    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to get School",
        }

        res.send(response)

    }
}


export default { getschool, SaveSchool, deleteSchool, updateSchool,SearchAPI }
