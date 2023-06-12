import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


const prisma = new PrismaClient()

class EmailRepository {
    async fetchsuppillers(emails:string) {
        try {
           
                let Suppilers = await prisma.suppiler.findMany(
                    {
                        where:{
                            email:{
                                in : emails
                            }
                        }
                    }
                )
                return Suppilers;
            
        }
        catch (e) {
            return e
        }
    }
}

export default new EmailRepository;