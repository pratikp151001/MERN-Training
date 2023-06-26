import { PrismaClient } from "@prisma/client"
import { AddStockModel } from "../../Model/AddStokModel";

const prisma = new PrismaClient()

class StockRepository {
    async AddStock(stock: AddStockModel) {
        console.log("🚀 ~ file: StockRepo.ts:8 ~ StockRepository ~ AddStock ~ stock:", stock)
        let respstock = await prisma.stock.create({
            data: {
                stockname: stock.stockname,
                quantity: stock.quantity
            }
        })
        return respstock;
    }

    async GetStock() {
        let respstock = await prisma.stock.findMany(
           {
            include:{
                customer:true
            }
           }
        )
        return respstock;
    }

    async DeleteStock(id :string) {
        let respstock = await prisma.stock.delete({
            where:{
                id:id
            }
        })
        return respstock;
    }
}

export default new StockRepository;
