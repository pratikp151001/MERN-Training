import  express,{Request,Response} from "express";

class InvoiceController{
    getinvoice(req:Request,res:Response){
        console.log("get Method called")
        res.send("get invoice")
    }
    postinvoice(req:Request,res:Response){
        console.log("post method of invoice")
         console.log(req.body)
       res.send(req.body)
    }
}

export default new  InvoiceController();