export function ValidateOnlyString(Value : string){
    console.log("Validate OnlyString Called")
    var OnlystringRegex = /^[A-Za-z]+$/;
    if (Value.match(OnlystringRegex)){
        return true
    }
    else{
        return false
    }
}