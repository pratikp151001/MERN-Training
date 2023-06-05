import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


const prisma = new PrismaClient()

class UserRepository {
    async RegisterUser(user: UserRegistrationModel) {
        try{
        let User = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                mobile: user.mobile,
               

            }
        })
        return User;
    }
    catch(e)
    {
        return e
    }
    }

    async LoginUser(email: string) {
        let User = await prisma.user.findMany(
            {
                where:
                {
                    email: email
                }
            }
        )
        return User;
    }

    async UserProfile(id: string) {
        let User = await prisma.user.findFirst(
            {
                where:
                {
                    id: id
                }
            }
        )
        return User;
    }

    async UpdateUserProfile(id: string,user:UserRegistrationModel) {
        let User = await prisma.user.update(
            {
                where:
                {
                    id: id
                }
                ,
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    mobile: user.mobile,
                   
    
                }
            },
            
        )
        return User;
    }
   
}

export default new UserRepository;
