import express from 'express'
import {add} from './calculation'
// import mongoose from 'mongoose';

// import axios from 'axios'

const app=express()


function divide(a:number,b:number):Promise<number>{
    return new Promise((resolve,reject)=>{
        if(b==0){
            reject(new Error("can't dicide by 0"))
        }
        else{
        resolve(a/b)
        }
    })
}

divide(3,2).then(result=>{console.log(result)}).catch(()=>{console.log("can't devide by 0")})

add(2,3).then(result=>{console.log(result)}).catch(error=>{console.log("error")})


// app.get('/',async(req,res)=>{
//     try {
//         const response = await axios.get('https://api.github.com/users/hadley/orgs');
//         const data = response.data;

//         res.json(data);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error fetching data' });
//       }
// })

app.get('/',async(req,res)=>{
    
    res.send("Hello")
})
app.post('/',async(req,res)=>{
    
    res.send("Thank you")
})


app.listen(8081,()=>{
    console.log("Listening on port number 8081");
})