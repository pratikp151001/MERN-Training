import express, { Request, Response } from "express";
import jsonData from "../Investment.json"
import { Weather } from "../interface/investmentInterface";
import { InvoiceModel } from "../model/invoiceModel";

class InvestmentController{
    getInvestment(req:Request,res:Response){
        console.log("getInvestmentCalled")
    }
}
export default new InvestmentController();