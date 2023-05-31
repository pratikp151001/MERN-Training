import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { UserLoginModel } from "../../Model/UserLoginModel";

const prisma = new PrismaClient()

class UserRepository {
    async RegisterUser(user: UserRegistrationModel) {
        let User=await prisma.user.create({
            data:{
                name :user.name,
                email :user.email,
                password :user.password,
                address :user.address,
                mobile :user.mobile,
                pincode :user.pincode

                
            }
        })
        return User;
    }
    async LoginUser(email :string) {
        let User=await prisma.user.findMany({where:{email:email}})
        return User;
    }

    async FetchAllUsers() {
        let User=await prisma.user.findMany()
        return User;
    }
    async FetchUserById(id:string) {
        let User=await prisma.user.findMany({where:{id:id}})
        return User;
    }

    async DeleteUser(id:string) {
        let User=await prisma.user.delete({where:{id:id}})
        return User;
    }
    async UpdateUser(id:string,user:UserRegistrationModel) {
        let User=await prisma.user.update({where:{id:id},
            data:{
                name :user.name,
                email :user.email,
                password :user.password,
                address :user.address,
                mobile :user.mobile,
                pincode :user.pincode

                
            }
        })
        return User;
    }
}

export default  new  UserRepository()