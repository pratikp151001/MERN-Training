import express, { Request, Response } from "express";
import jsonData from "../Investment.json"
import { Weather } from "../interface/investmentInterface";
import { InvoiceModel } from "../model/invoiceModel";

let Invoiceobj = new InvoiceModel();
let data = jsonData
const invoiceInterface: Weather = data;
class InvoiceController {

    getinvoice(req: Request, res: Response) {
        console.log("get Method called")
        //res.send("get invoice")

        try {
            Invoiceobj.status = 200
            Invoiceobj.data = data
            Invoiceobj._id = 256

            res.send(Invoiceobj)


        } catch (ex: any) {
            Invoiceobj.status = 404

        }

    }
    postinvoice(req: Request, res: Response) {
        console.log("post method of invoice")

        // let data = jsonData
        // const invoiceInterface: Weather = data;

        // console.log(invoiceInterface._id)


        // console.log(data)

        // res.send(req.body)

        try {
            Invoiceobj.status = 200
            Invoiceobj.data =  (req.body)
            Invoiceobj._id = 256

             res.send(Invoiceobj)


        } catch (ex: any) {
            Invoiceobj.status = 404

        }
    }
}

export default new InvoiceController();