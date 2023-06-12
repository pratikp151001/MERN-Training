import express from 'express'
import bodyParser from 'body-parser';
import routes from "../App/Routes/index"
import cors from 'cors'
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import dotenv from 'dotenv'

class Server{
    
    PORT:any;
    app:any;
    constructor(){
        dotenv.config({path:".env"})
        this.PORT=process.env.PORT
        this.app=express()
        
    }
    start(){
        this.app.use(cors())
        this.config()
        this.setRoutes()
        this.listen()
        // this.mail()
        console.log("object")
    }
    config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setRoutes(){
       this.app.use(routes)
    console.log("🚀 ~ file: index.ts:25 ~ Server ~ setRoutes ~ Routes:", "Routes")
    

    }
    listen(){
    this.app.listen(this.PORT,() => {
        console.log("🚀 ~ file: index.ts:31 ~ Server ~ this.app.listen ~ PORT:", this.PORT)
       
    })
    }


    async mail(){

        console.log("sending mail")

        let testAccount=await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'stefan26@ethereal.email',
                pass: 'xf9kbqdB88cm437Jkj'
            }
        });

        let info = await transporter.sendMail({
            from: "cydney4@ethereal.email",
            to: "pp757439@gmail.com, alokpal28071997@gmail.com",
            subject: "Hello",
            text: "Hello world",
          });
        console.log("🚀 ~ file: index.ts:61 ~ Server ~ mail ~ info:", info)

          
    }
}
export default Server