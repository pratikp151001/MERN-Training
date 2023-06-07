
const isUserLogedIn=()=>{
    const loginUserPermission = JSON.parse(localStorage.getItem('token'))
    if(loginUserPermission){
        return true
    }
    else{
        return  false
    }
}

export  default isUserLogedIn