import express,{Request,Response} from 'express'
// import route from '../Routes/index'

console.log('dcscdvsd')

import dotenv from 'dotenv'
import bodyParser from "body-parser";
dotenv.config({path:".env"});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(route);
var Port = process.env.PORT || 2020;
app.listen(Port, () => console.log(`Server runs on the port ${Port}. Env : ${process.env.PORT}`));
console.log("test");