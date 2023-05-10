import express from 'express'
import bodyParser from 'body-parser';
import routes from "../App/Routes/index"
import exp from 'constants';
import dotenv from 'dotenv'


class Server {
    PORT:any;
    app:any;
    constructor(){
        dotenv.config({path:".env"});
        this.PORT=process.env.PORT;
        this.app=express()
    }
    start(){
        this.config()
        this.setupRoutes()
        this.listen()
    }
    config(){
      
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    setupRoutes(){
        this.app.use(routes)
    }
    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`App is running on port ${this.PORT}`);
        })
    }
}

export default Server;