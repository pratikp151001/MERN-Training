export function ValidateEmail(email : string){
    console.log("Validate Email Called")
    var EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(EmailRegex)){
        return true
    }
    else{
        return false
    }
}