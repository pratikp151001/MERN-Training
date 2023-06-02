

const PermissionCheck = (permission) => {

    const loginUserPermission = JSON.parse(localStorage.getItem('logedInUserPermissions'))
    // console.log("🚀 ~ file: PermissionCheck.jsx:3 ~ loginUserPermission:", loginUserPermission)



    // console.log("🚀 ~ file: PermissionCheck.jsx:7 ~ PermissionCheck ~  loginUserPermission[0]?.role?.permisso")
    if (loginUserPermission != null) {
        console.log("🚀 ~ file: PermissionCheck.jsx:15 ~ PermissionCheck ~  loginUserPermission[0]?.role?.permisson?.some(per=>per.permission_name ===permission):", loginUserPermission[0]?.role?.permisson?.some(per => per.permission_name === permission), "DS", permission)

        return loginUserPermission[0]?.role?.permisson?.some(per => per.permission_name === permission)
    } else {
        console.log("🚀 ~ file: PermissionCheck.jsx:17 ~ PermissionCheck ~ false:", false)
        return false
    }
}
console.log("🚀 ~ file: PermissionCheck.jsx:19 ~ PermissionCheck ~ PermissionCheck:", PermissionCheck)




export default PermissionCheck;