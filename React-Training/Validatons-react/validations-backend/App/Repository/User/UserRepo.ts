import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";

const prisma = new PrismaClient()

class UserRepository {
    async RegisterUser(user: UserRegistrationModel) {
        let User = await prisma.userDetails.create({
            data: {
              
                birthday: user.birthday,
                color: user.color,
                email: user.email, 
                gender :user.gender,
                lastname :user.lastname,
                firstname :user.firstname,
                mobile :user.mobile,
                password :user.password,
                hobbies :user.hobbies ,
                file :user.file
            }
        })
        return User;
    }
}

export default new UserRepository()