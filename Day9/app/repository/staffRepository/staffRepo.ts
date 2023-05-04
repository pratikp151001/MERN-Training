import { staffmodel } from "../../Models/staffModel/staffModel";
// import { responseModel } from "../../Interface/ResponseInterface";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class staffrepository{
    async getstaff(){
        console.log("called  staff get repo")

        // {include:{FavStudent:true}}
        return await prisma.staff.findMany({include:{FavStudent:true}});
        
    }

    async AddStaffTODB(staffmodel:staffmodel){
        
        let resposeStudent = await prisma.staff.create({data: {
            name: staffmodel.name,
            email: staffmodel.email,
            salary:staffmodel.salary,
            favStudentID:staffmodel.favStudent,
            }})
        return resposeStudent
    }

    async DeleteStaff(idtodelete:any){
        return await prisma.staff.delete({where:{id:idtodelete}})
    }

    async UpdateStaff(staffmodel:staffmodel,idtoupdate:any){
        let resposeStudent = await prisma.staff.update({where:{id:idtoupdate},data: {
            name: staffmodel.name,
            email: staffmodel.email,
            salary:staffmodel.salary,
            favStudentID:staffmodel.favStudent,
            }})
        return resposeStudent
    }


}


export default new staffrepository();