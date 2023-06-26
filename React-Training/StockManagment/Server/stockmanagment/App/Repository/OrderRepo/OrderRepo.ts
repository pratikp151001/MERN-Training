import { PrismaClient } from "@prisma/client"
import { OrderModel } from "../../Model/OrderModel";

const prisma = new PrismaClient()

class OrderRepository {
    async AddOrder(order: OrderModel) {
        console.log("🚀 ~ file: OrderRepo.ts:8 ~ OrderRepository ~ AddOrder ~ order:", order)
        // console.log("🚀 ~ file: StockRepo.ts:8 ~ StockRepository ~ AddStock ~ stock:", stock)
        let respstock = await prisma.customers.create({
            data: {
                customername: order.customername,
                orderquantity: order.quantityordered,
                stockId: order.stocksname
            }
        })
        return respstock;
    }

    async GetOrder() {
        let respstock = await prisma.customers.findMany({
            include: {
                Stock: true
            }
        })
        return respstock;
    }

    async DeleteOrder(id :string) {
        let respstock = await prisma.customers.delete({
            where:{
                id:id
            }
        })
        return respstock;
    }
}

export default new OrderRepository;
