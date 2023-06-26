import { PrismaClient } from "@prisma/client"
import { UserRegistrationModel } from "../../Model/UserRegistrationModel";


const prisma = new PrismaClient()

class HeaderRepository {
    async GetTableHeaders(month: string) {
        try {
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
    async PostTableHeaders(data: any) {
        try {
            let Headers = await prisma.table_Headers.create({
                data: data
            })
            return Headers;

        }
        catch (e) {
            return e
        }
    }

    async UpdateTableHeaders(data: any, id: string) {
        try {
            let Headers = await prisma.table_Headers.update({

                where: {
                    id: id
                },
                data: data
            })
            return Headers;

        }
        catch (e) {
            return e
        }
    }
}


export default new HeaderRepository;
