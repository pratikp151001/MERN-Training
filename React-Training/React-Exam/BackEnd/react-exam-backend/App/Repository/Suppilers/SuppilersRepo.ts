import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


const prisma = new PrismaClient()

class UserRepository {
    async GetSuppliers(month: string) {
        console.log("🚀 ~ file: SuppilersRepo.ts:9 ~ UserRepository ~ GetSuppliers ~ month:", month)
        try {
            // console.log("🚀 ~ file: SuppilersRepo.ts:12 ~ UserRepository ~ GetSuppliers ~ prisma.invoice.findMany():",await prisma.invoice.findMany())
            if ((await prisma.invoice.findMany())) {
                let Suppilers = await prisma.suppiler.findMany({
                    include: {
                        invoice:
                            {
                                where:{month:month}
                            }
                            // true
                    }
                })
                return Suppilers;
            }
        }
        catch (e) {
            return e
        }
    }


    async PostData(data: any) {
        // console.log("🚀 ~ file: SuppilersRepo.ts:25 ~ UserRepository ~ PostData ~ data:", data)
        try {
            let Suppilers = await prisma.invoice.createMany(
                {
                    data: [data]
                    //    {
                    //     Column1:data.Column1,
                    //     Column2:data.Column2,
                    //     Column3:data.Column3,
                    //     Column4:data.Column4,
                    //     Column5:data.Column5,
                    //     Column6:data.Column6,
                    //     Column7:data.Column7,
                    //     Column8:data.Column8,
                    //     Column9:data.Column9,
                    //     Column10:data.Column10,
                    //     sup_id:data.sup_id,
                    //     month:data.month,
                    //     Net:data.Net,
                    //     VAT:data.VAT,
                    //     Advance:data.Advance,
                    //     Balance:data.Balance,
                    //     isApprove:false
                    //    }
                    //   data

                }
            )
            return Suppilers;
        }
        catch (e) {

            console.log("🚀 ~ file: SuppilersRepo.ts:60 ~ UserRepository ~ PostData ~ e:", e)
            return e
        }
    }


    async UpdateData(data: any,id:string) {
         console.log("🚀 ~ file: SuppilersRepo.ts:25 ~ UserRepository ~ PostData ~ data:", data)
        try {
            let Suppilers = await prisma.invoice.update(
                { where:{
                    id:id
                },
                    data: 
                       {
                        Column1:data.Column1,
                        Column2:data.Column2,
                        Column3:data.Column3,
                        Column4:data.Column4,
                        Column5:data.Column5,
                        Column6:data.Column6,
                        Column7:data.Column7,
                        Column8:data.Column8,
                        Column9:data.Column9,
                        Column10:data.Column10,
                        sup_id:data.sup_id,
                        month:data.month,
                        Net:data.Net,
                        VAT:data.VAT,
                        Advance:data.Advance,
                        Balance:data.Balance,
                        isApprove:false
                       }
                    //   data

                }
            )
            return Suppilers;
        }
        catch (e) {

            console.log("🚀 ~ file: SuppilersRepo.ts:60 ~ UserRepository ~ PostData ~ e:", e)
            return e
        }
    }




}

export default new UserRepository;
