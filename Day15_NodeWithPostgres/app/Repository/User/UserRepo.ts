import { UserModel } from "../../Models/User/UserRegistartionModel";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class userrepository {

    async registerUser(User: UserModel) {
        console.log("Register  Repo called")

        let resposeUser = await prisma.user.create({
            data: {
                name: User.name,
                age: User.age,
                email: User.email,
                password: User.password


            }
        })
        return resposeUser
    }

    async emailCheck(email: string) {
        console.log("email check called")

        let resposeUser = await prisma.user.findFirst({ where: { email: email } })
        console.log(resposeUser)
        return resposeUser
    }

    async GetActiveUsers(id: number) {
        console.log("called  getActiveusers")

        let resposeUser = await prisma.user.findMany({ where: { id: id } })
        return resposeUser
    }
    async DeleteUser(id: number) {
        console.log("called  getActiveusers")

        let resposeUser = await prisma.user.delete({ where: { id: id } })
        return resposeUser
    }

    async UpdateUser(id: number,User: UserModel) {
        console.log("called  UpdateUSer")

        let resposeUser = await prisma.user.update({ where: { id: id },
        data:{
            name: User.name,
            age: User.age,
            email: User.email,
            password: User.password
        } })
        return resposeUser
    }
}
export default new userrepository();