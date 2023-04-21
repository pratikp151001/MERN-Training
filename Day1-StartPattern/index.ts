// console.log("EFwe")
// let firstName : string;
// firstName='Pratik';
// console.log(firstName)

console.log("\n Pattern 1 \n")
for(let i:number=0;i<6;i++){
    let stars:string="";
    for(let j:number=0;j<=i;j++){
       stars+=" *";
    }
    console.log(stars);
}

console.log("\n Pattern 2 \n")
for(let i:number=6;i>0;i--){
    let stars:string="";
    for(let j:number=i;j>0;j--){
       stars+=" *";
    }
    console.log(stars);
}
console.log("\n Pattern 3 \n")
for(let i:number=1;i<=5;i++){
    let stars:string="";
    for(let j:number=1;j<=6-i;j++){
       stars+=" ";
    }
  
    for(let k:number=1;k<=i;k++){
        stars+=" *";
    }
    console.log(stars);
}

console.log("\n Pattern 4 \n")
for (let i = 0; i < 5; i++) {
    let stars:string="";
    for (let j = 0; j < i; j++) {
        stars += " ";
    }
    // printing star
    for (let k = 0; k < (5-i); k++) {
        stars += " *";
    }
   console.log(stars)
  }

console.log("\n Pattern 5 \n")
for(let i:number=1;i<6;i++){
    let stars:string="";
    for(let j:number=1;j<=i;j++){
       stars+=" "+j.toString();
    }
    console.log(stars);
}

console.log("\n Pattern 6 \n")
for(let i:number=1;i<6;i++){
    let stars:string="";
    for(let j:number=1;j<=i-1;j++){
       stars+="  ";
    }
    for(let j:number=1;j<=6-i;j++){
        stars+=" *";
     }
    console.log(stars);
}

function hello(name : string) : string{
    let greet:string="hello "+name;
    return greet;
}
console.log(hello("Pratik"))



//    for (i = 1; i <= rows; ++i, k = 0) {
//       for (space = 1; space <= rows - i; ++space) {
//          printf("  ");
//       }
//       while (k != 2 * i - 1) {
//          printf("* ");
//          ++k;
//       }
//       printf("\n");
//    }
//    return 0;
// }

