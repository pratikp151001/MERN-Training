export function ValidateNumbers(Value : number){
    console.log("Validate Number Called")
    
    if (Value>1 || Value<100){
        return true
    }
    else{
        return false
    }
}