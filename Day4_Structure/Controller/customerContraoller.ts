import express, { Request, Response, NextFunction } from 'express'
import connect from '../config/DBconnect'
import mongoose from 'mongoose';
import customerSchema from '../config/customerSchema';


  connect();
  const User = mongoose.model('practices', customerSchema);
class ProductController {

    //Get Customer
    async getcustomer(req: Request, res: Response){
        console.log("getCustomerMethodCalled")

        let userData = await User.find()
        res.send(userData);

    }

//Post Customer
    postcustomer(req: Request, res: Response){
        console.log("postCustomerMethodCalled",req)
        res.json(req.body);
        // User.(req.body)
        console.log(req.body)
        const data = req.body;
        const newDocument = new User(data);
       newDocument.save();
        // return "Get Products";
    }

    //Delete Customer
    deletecustomer(req: Request, res: Response) {
        console.log("DeleteCustomerMethodCalled")
        var id = req.params.id;
        console.log(id)
    }
    //update customer
    updatecustomer(req: Request, res: Response) {
        console.log("UpadateCustomerMethodCalled")
        var id = req.params.id;
        console.log(id)
    }



}
export default new ProductController();
