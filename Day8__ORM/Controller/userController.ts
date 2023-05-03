import  express  from "express";
import { Request,Response } from "express";
import { PrismaClient } from '@prisma/client'
import {userModel} from '../Model/userModel'
import { userinterface } from "../Interface/userInterface";

const prisma = new PrismaClient()
let response=new userModel()

class userController{
   async  getuserDetails(req:Request,res:Response){
        // console.log("GetUserClled")
        try{
           let Data= await prisma.userList.findMany()
           
           response.status=200
           response.data=Data
           response.msg="Data Get successfully"
           res.send(response)

        }
        catch(ex){
            response.status=400
           response.data=null
           response.msg="Failed to Get Data"
           res.send(response)

        }
       
        // await prisma.$connect()
       
    }

    async postuserDetails(req:Request,res:Response){
       
      // console.log("PostUserClled")
        

          try{
            
            const User:userinterface={
              name:req.body.name,
              email:req.body.email,
              age:req.body.age

            }
            await prisma.userList.create({
            data:{
              name:User.name,
              email: User.email,
              age:User.age

            }
              })
            
            response.status=200
            response.data=null
            response.msg="Data Added successfully"
            res.send(response)
 
         }
         catch(ex){
             response.status=400
            response.data=null
            response.msg="Failed to Add Data"
            res.send(response)
 
         }
    }

    async DeleteuserDetails(req:Request,res:Response){
       
      //console.log("DeleteUserClled")
      

        try{
         var idtodelete=req.params.id
         console.log(idtodelete)
          await prisma.userList.delete({where:{id:idtodelete}})
          
          response.status=200
          response.data=null
          response.msg="Data Deleted successfully"
          res.send(response)

       }
       catch(ex){
           response.status=400
          response.data=null
          response.msg="Failed to Delete"
          res.send(response)

       }
  }

  async UpdateuserDetails(req:Request,res:Response){
       
   // console.log("UpdateUserClled")
    

      try{
       var idtoupdate=req.params.id
       const User:userinterface={
        name:req.body.name,
        email:req.body.email,
        age:req.body.age

      }
       console.log(idtoupdate)
        await prisma.userList.update({where:{id:idtoupdate},data:{
          name:User.name,
          email: User.email,
          age:User.age

        }})
        
        response.status=200
        response.data=null
        response.msg="Data Updated successfully"
        res.send(response)

     }
     catch(ex){
         response.status=400
        response.data=null
        response.msg="Failed to Update Data"
        res.send(response)

     }
}
}

export default new userController();