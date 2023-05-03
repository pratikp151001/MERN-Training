import { studentmodel } from "../../Models/studentModel/studentModel";
import { responseModel } from "../../Interface/ResponseInterface";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class studentrepository{
    
    async AddStudentTODB(studentmodel:studentmodel){
        
        let resposeStudent = await prisma.studentList.create({data: {
            name: studentmodel.name,
            email: studentmodel.email,
            age: studentmodel.age,
           marks:studentmodel.marks
            
            }})
        return resposeStudent
    }

   

    async getstudent(){
        console.log("called get repo")
        return await prisma.studentList.findMany()
        
    }
    // async checkEmail(emailtocheck:any){
    //     console.log( prisma.studentList.findMany({where:{email:emailtocheck}}))
    //     return await prisma.studentList.findMany({where:{email:emailtocheck}})
    // }

    async DeleteStudent(idtodelete:any){
        return await prisma.studentList.delete({where:{id:idtodelete}})
    }

    async UpdateStudent(studentmodel:studentmodel,idtoupdate:any){
        let resposeStudent = await prisma.studentList.update({where:{id:idtoupdate},data: {
            name: studentmodel.name,
            email: studentmodel.email,
            age: studentmodel.age,
           marks:studentmodel.marks
            
            }})
        return resposeStudent
    }
}

export default new studentrepository();