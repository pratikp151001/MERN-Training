import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class AdminRepository {
    async FetchPermissions() {
        let Permission=await prisma.permission.findMany()
        return Permission;
    }
}

export default new AdminRepository()