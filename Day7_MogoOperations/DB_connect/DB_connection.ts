import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config({path:".env"});
const connectionString= process.env.MONGO_CON_STR

// async function GetDBData() {
    
export default async function connect(){

 await  mongoose.connect(connectionString as string)
    .then(() => { console.log("Connection successfull....") })
    .catch(() => console.log("err"));
  }


