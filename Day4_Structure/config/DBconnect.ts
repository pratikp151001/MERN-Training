
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config({path:".env"});
const connectionString= process.env.DBString || "mongodb://127.0.0.1:27017/Test"

// async function GetDBData() {
    
  function connect(){

   mongoose.connect(connectionString)
    .then(() => { console.log("Connection successfull....") })
    .catch(() => console.log("err"));
  }
//   const userSchema = new mongoose.Schema({
//     name: String
//   });

//   app.get('/users',middleware, async (req, res) => {
//     const User = mongoose.model('practice', userSchema);
//     let userData = await User.find({name:"Pratik"})
//       res.send(userData);
//     });
//   };
// //   app.post('/apps',async(req,res)=>{

// //   })
//   app.listen(8080,()=>{
//     console.log("Listening on port number 8080");
// })
// const middleware=(req :Request,res:Response,next:NextFunction)=>{
//     console.log("middleware");
//    next()
// }
  
// // app.get()
// //   const User = mongoose.model('practice', userSchema);
// //   let userData = await User.find({})
// //   return userData;
// //  // console.log(userData)
// }

// GetDBData().then ((result)=>{
//   console.log(result) 
// })
export default connect;
