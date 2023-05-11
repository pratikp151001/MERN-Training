import { UserModel } from "../../Models/User/UserRegisterModel";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class userrepository {

    async registerUser(User: UserModel) {
        console.log("Repo called")

        let resposeUser = await prisma.user.create({
            data: {
                first_name: User.first_name,
                last_name: User.last_name,
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
    async GetAllUsers(id: string) {
        console.log("called  getallusers")

        let resposeUser = await prisma.user.findMany({ where: { id: id } })
        return resposeUser
    }
}
export default new userrepository();