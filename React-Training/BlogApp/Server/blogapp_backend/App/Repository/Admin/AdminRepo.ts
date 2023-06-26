import { PrismaClient } from "@prisma/client"
import { RoleModel } from "../../Model/RoleModel";

const prisma = new PrismaClient()

class AdminRepository {
    async FetchPermissions() {
        let Permission=await prisma.permission.findMany()
        return Permission;
    }

    async AddRoles(role:RoleModel) {
        
        let Role=await prisma.role.create({
            data:{
                role_name:role.role_name,
                permissionIds:role.permissionIds,
               
            }
        })
        return Role;
       
    }

    async FetchRoles() {
        
        let Role=await prisma.role.findMany()
        return Role;
       
    }
}

export default new AdminRepository()