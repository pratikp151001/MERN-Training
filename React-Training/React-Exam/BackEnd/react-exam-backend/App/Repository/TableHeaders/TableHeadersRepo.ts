import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


const prisma = new PrismaClient()

class HeaderRepository {
    async GetTableHeaders(month: string) {
        console.log("🚀 ~ file: TableHeadersRepo.ts:9 ~ HeaderRepository ~ GetTableHeaders ~ month:", month)
        try {
            // console.log("🚀 ~ file: SuppilersRepo.ts:12 ~ UserRepository ~ GetSuppliers ~ prisma.invoice.findMany():",await prisma.invoice.findMany())

            let Headers = await prisma.table_Headers.findMany({
                where: {
                    month: month
                }
            })
            return Headers;

        }
        catch (e) {
            return e
        }
    }
    async PostTableHeaders(data:any) {
        console.log("🚀 ~ file: TableHeadersRepo.ts:26 ~ HeaderRepository ~ PostTableHeaders ~ data:", data)
        try {
            // console.log("🚀 ~ file: SuppilersRepo.ts:12 ~ UserRepository ~ GetSuppliers ~ prisma.invoice.findMany():",await prisma.invoice.findMany())

            let Headers = await prisma.table_Headers.create({
               data:data
            })
            return Headers;

        }
        catch (e) {
            return e
        }
    }

    async UpdateTableHeaders(data:any,id:string) {
        console.log("🚀 ~ file: TableHeadersRepo.ts:42 ~ HeaderRepository ~ UpdateTableHeaders ~ UpdateTableHeaders:", "UpdateTableHeaders")
        try {
            // console.log("🚀 ~ file: SuppilersRepo.ts:12 ~ UserRepository ~ GetSuppliers ~ prisma.invoice.findMany():",await prisma.invoice.findMany())

            let Headers = await prisma.table_Headers.update({
             
                where:{
                    id:id
                },
                data:data
            })
            return Headers;

        }
        catch (e) {
            return e
        }
    }
}


export default new HeaderRepository;
