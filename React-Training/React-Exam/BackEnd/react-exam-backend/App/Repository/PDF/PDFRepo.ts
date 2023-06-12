// import { PrismaClient } from "@prisma/client"
// import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


// const prisma = new PrismaClient()

// class PDFRepository {
//     async fetchsuppillers(emails:string) {
//         try {
           
//                 let Suppilers = await prisma.suppiler.findMany(
//                     {
//                         where:{
//                             email:{
//                                 in : emails
//                             }
//                         },
//                         include:{
//                             invoice:true
//                         }
//                     }
//                 )
//                 return Suppilers;
            
//         }
//         catch (e) {
//             return e
//         }
//     }
// }

// export default new PDFRepository;