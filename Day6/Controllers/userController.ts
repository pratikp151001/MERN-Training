import express, { Request, Response } from 'express'
import connect from '../DB_connect/DB_connection';
import mongoose from 'mongoose'
import { usermodel } from '../model/usermodel';
import userSchema from '../DB_connect/usersScheema';
connect();
const User = mongoose.model('users', userSchema);
let userobj = new usermodel();

class userController {
    async getUser(req: Request, res: Response) {
        console.log("getUserCalled");
       
       
        try {
            let userData = await User.find()

            userobj.status = "200"
            userobj.data = userData
            userobj.msg = "Data Get successfully"

            res.send(userobj)


        } catch (ex: any) {
            userobj.status = "404"
            userobj.data=null
            userobj.msg = "Something went Wrong"
            res.send(userobj)
        }

    }

    async postUser(req: Request, res: Response) {
        console.log("postUserCalled");
        
        
        try {
            // res.json(req.body);
       
        const newDocument = new User(req.body);
        newDocument.save().then(() => { console.log("Data Addes sccessfully") }).catch((err) => { console.log(err) });

            userobj.status = "200"
            userobj.data=null
            userobj.msg = "Data store  successfully"

            res.send(userobj)


        } catch (ex: any) {
            userobj.status = "404"
            userobj.data=null
            userobj.msg = "Something went Wrong"
            res.send(userobj)
        }


    }
    async DeleteUser(req: Request, res: Response) {
        console.log("DeleteUserCalled");

       

        try {
            var idtodelete = req.params.id;
            console.log(idtodelete)
            await User.deleteOne({ _id: idtodelete })

            userobj.status = "200"
            userobj.data=null
            userobj.msg = "Data Deleted successfully"

            res.send(userobj)


        } catch (ex: any) {
            userobj.status = "404"
            userobj.data=null
            userobj.msg = "Something went Wrong"
            res.send(userobj)
        }
    }
    async UpdateUser(req: Request, res: Response) {
        console.log("UpdateUserCalled");

       

        try {
            var idtoupdate = req.params.id;
            //  console.log(idtoupdate)
            //  console.log(req.body)
            var newvalues = { $set: req.body };
            console.log(newvalues)
            await User.updateOne({ _id: idtoupdate }, newvalues, { new: true })

            userobj.status = "200"
            userobj.data=null
            userobj.msg = "Data Updated successfully"

            res.send(userobj)


        } catch (ex: any) {
            userobj.status = "404"
            userobj.data=null
            userobj.msg = "Something went Wrong"
            res.send(userobj)
        }
    }

}
export default new userController();