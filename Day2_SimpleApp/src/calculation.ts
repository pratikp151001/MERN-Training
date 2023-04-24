export function  add(a :number,b:number){
return new Promise((resolve,reject)=>{

    if(a+b<10){
        reject(new Error("Please enter numbers"))
    }
    resolve(a+b);
})
}