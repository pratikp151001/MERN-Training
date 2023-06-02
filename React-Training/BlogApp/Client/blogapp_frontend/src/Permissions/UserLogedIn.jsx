
const isUserLogedIn=()=>{
    const loginUserPermission = JSON.parse(localStorage.getItem('logedInUserPermissions'))
    if(loginUserPermission){
        return true
    }
    else{
        return  false
    }
}

export  default isUserLogedIn