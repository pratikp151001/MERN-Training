import { CourseModel } from "../../Models/CourseModel/CourseModel";
// import { responseModel } from "../../Interface/ResponseInterface";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class CourseRepo {
    async getCourse() {
        console.log("called  course get repo")


        return await prisma.course.findMany({ include: { CourseTeacher: true } })

    }

    async AddCourseTODB(CourseModel: CourseModel) {

        let resposeCourse = await prisma.course.create({
            data: {
                courseCode: CourseModel.courseCode,
                studentId: CourseModel.studentId,
                isCompulsary: CourseModel.isCompulsary,
                teacherId: CourseModel.teacherId
            }
        })
        return resposeCourse
    }

    async deleteCourse(idtodelete: any) {
        return await prisma.course.delete({ where: { id: idtodelete } })
    }

    async UpdateCourse(CourseModel: CourseModel, idtoupdate: any) {
        let resposeCourse = await prisma.course.update({
            where: { id: idtoupdate },
            data: {
                courseCode: CourseModel.courseCode,
                studentId: CourseModel.studentId,
                isCompulsary: CourseModel.isCompulsary,
                teacherId: CourseModel.teacherId
            }
        })
        return resposeCourse
    }


}

export default new CourseRepo()