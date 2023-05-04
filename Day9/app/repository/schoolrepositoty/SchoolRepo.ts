// import { responseModel } from "../../Interface/ResponseInterface";
import { PrismaClient } from "@prisma/client"
import { SchoolModel } from "../../Models/schoolModel/schoolModel"


const prisma = new PrismaClient()

class SchooleRepo {
    async getSchool() {
        console.log("called  school get repo")


        return await prisma.school.findMany()

    }
    async AddSchoolTODB(SchoolModel: SchoolModel) {

        let resposeSchol = await prisma.school.create({
            data: {
                schoolNAme: SchoolModel.schoolNAme,
                address: SchoolModel.address,
                studentId:SchoolModel.studentId,
                studentIDs: SchoolModel.studentsIds

            }
        })
        return resposeSchol
    }

    async deleteSchool(idtodelete: any) {
        return await prisma.school.delete({ where: { id: idtodelete } })
    }

    async UpdateSchool(SchoolModel: SchoolModel, idtoupdate: any) {
        let resposeCourse = await prisma.school.update({
            where: { id: idtoupdate },
            data: {
                schoolNAme: SchoolModel.schoolNAme,
                address: SchoolModel.address,
                studentIDs: SchoolModel.studentsIds

            }
        })
        return resposeCourse
    }

    async search(sortBy: any) {
        console.log("called  search repo")

        console.log(sortBy)
       
        return await prisma.studentList.findMany({
            include:{
                school:{
                    select:{
                        id:true,
                        schoolNAme:true
                    }
                }
            }
        })
    }

}

export default new SchooleRepo()