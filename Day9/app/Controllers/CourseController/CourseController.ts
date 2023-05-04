import { CourseModel } from "../../Models/CourseModel/CourseModel";
import { Request, Response } from "express";
import CourseRepositary from "../../repository/index"
import { responseModel } from "../../Interface/ResponseInterface";

const getcourse = async (req: Request, res: Response) => {
    console.log("DSgvsd")

    try {
        let Course = await CourseRepositary.CourseRepository.getCourse()

        let response: responseModel = {
            status: 200,
            data: Course,
            error: null,
            message: "Course Get successfully",
        }
        res.send(response)
    }
    catch (error) {
        console.log(error)
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to get Corse",
        }
        res.send(response)

    }
}


const SaveCourse = async (req: Request, res: Response) => {
    console.log("Save Course called")
    try {
        const courseToAdd: CourseModel = {
            courseCode: req.body.courseCode,
            studentId: req.body.studentId,
            isCompulsary: req.body.isCompulsary,
            teacherId: req.body.teacherId

        }

        let course = await CourseRepositary.CourseRepository.AddCourseTODB(courseToAdd)

        let response: responseModel = {
            status: 200,
            data: course,
            error: null,
            message: "course Posted successfully",
        }
        res.send(response)
    }
    catch (error) {
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



const deleteCourse = async (req: Request, res: Response) => {
    console.log("Delete controller called")
    try {
        var idtodelete = req.params.id
        const student = await CourseRepositary.CourseRepository.deleteCourse(idtodelete)
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




const updateCourse = async (req: Request, res: Response) => {
    console.log("update Satff called")

    try {
        var idtoupdate = req.params.id
        console.log(idtoupdate)

        const courseToAdd: CourseModel = {
            courseCode: req.body.courseCode,
            studentId: req.body.studentId,
            isCompulsary: req.body.isCompulsary,
            teacherId: req.body.teacherId

        }

        // const student = await StudentRepositary.StudentRepositary.DeleteStudent(idtodelete)
        const Course = await CourseRepositary.CourseRepository.UpdateCourse(courseToAdd, idtoupdate)
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
export default { getcourse, SaveCourse, deleteCourse, updateCourse }