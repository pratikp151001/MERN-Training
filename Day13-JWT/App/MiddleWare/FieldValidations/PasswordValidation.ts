export function ValidatePassword(password : string){
    console.log("Validate Email Called")
    var PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (password.match(PasswordRegex)) {
        return true
    }
    else{
        return false
    }
}