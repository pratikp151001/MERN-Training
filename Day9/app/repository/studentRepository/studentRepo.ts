import { studentmodel } from "../../Models/studentModel/studentModel";
import { responseModel } from "../../Interface/ResponseInterface";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class studentrepository {

    async AddStudentTODB(studentmodel: studentmodel) {

        let resposeStudent = await prisma.studentList.create({
            data: {
                name: studentmodel.name,
                email: studentmodel.email,
                age: studentmodel.age,
                marks: studentmodel.marks

            }
        })
        return resposeStudent
    }



    async getstudent() {
        console.log("called get repo")

        // {where:{name:"Pratik"}}
        // {where:{marks:{gt:90}}}
        // {where:{name:{endsWith:'Patel'}}}
        // {where:{AND:[{name:{endsWith:"Patel"}},{marks:{gt:60}}]}}
        // {select:{email:true,name:true}}
        return await prisma.studentList.findMany()

    }
    // async checkEmail(emailtocheck:any){
    //     console.log( prisma.studentList.findMany({where:{email:emailtocheck}}))
    //     return await prisma.studentList.findMany({where:{email:emailtocheck}})
    // }

    async DeleteStudent(idtodelete: any) {
        return await prisma.studentList.delete({ where: { id: idtodelete } })
    }

    async UpdateStudent(studentmodel: studentmodel, idtoupdate: any) {
        let resposeStudent = await prisma.studentList.update({
            where: { id: idtoupdate }, data: {
                name: studentmodel.name,
                email: studentmodel.email,
                age: studentmodel.age,
                marks: studentmodel.marks

            }
        })
        return resposeStudent
    }

    async search(wordToSearch: any) {
        console.log(wordToSearch.search)
        console.log("called search student repo")
        let pagetoskip = wordToSearch.page - 1
        console.log(pagetoskip)
        //return await prisma.studentList.findMany({orderBy:[{name:'desc'}]})
        // return await prisma.studentList.findMany({where:{AND:[{marks:{gte:90}},{age:{lt:50}}],NOT:{email:"Pratik7@gmail.com"}}}) 
        
        return await prisma.studentList.findMany({where:{OR:[{email:{contains:wordToSearch.search}},{name:{contains:wordToSearch.search}}]},skip:2*pagetoskip,take:2})
    }
}

export default new studentrepository();