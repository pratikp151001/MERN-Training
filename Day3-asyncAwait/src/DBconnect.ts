
import mongoose from 'mongoose'
import express from 'express'
import { Request, Response, NextFunction } from 'express';

function myFunction(req: Request, res: Response, next: NextFunction) {
  // function code here
}


const app=express()
async function GetDBData() {
  mongoose.connect("mongodb://127.0.0.1:27017/Test")
    .then(() => { console.log("Connection successfull....") })
    .catch(() => console.log("err"));

  const userSchema = new mongoose.Schema({
    name: String
  });

  app.get('/users',middleware, async (req, res) => {
    const User = mongoose.model('practice', userSchema);
    let userData = await User.find({name:"Pratik"})
      res.send(userData);
    });
  };
//   app.post('/apps',async(req,res)=>{

//   })
  app.listen(8080,()=>{
    console.log("Listening on port number 8080");
})
const middleware=(req :Request,res:Response,next:NextFunction)=>{
    console.log("middleware");
   next()
}
  
// app.get()
//   const User = mongoose.model('practice', userSchema);
//   let userData = await User.find({})
//   return userData;
//  // console.log(userData)
// }

GetDBData().then ((result)=>{
  console.log(result) 
})
