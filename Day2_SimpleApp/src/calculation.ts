export function  add(a :number,b:number):Promise<number>{
return new Promise((resolve,reject)=>{

    if(a+b<10){
      
        resolve(a+b);
    }
    else{
        reject(new Error("Please enter numbers"))
    }
    
})
}