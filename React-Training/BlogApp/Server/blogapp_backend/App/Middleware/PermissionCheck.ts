

const PermissionCheck = (permission:string,UsersPermission:any) => {

    if (UsersPermission != null) {

        return UsersPermission.some((per: { permission_name: string }) => per.permission_name === permission)
    } else {
        console.log("🚀 ~ file: PermissionCheck.jsx:17 ~ PermissionCheck ~ false:", false)
        return false
    }
}
console.log("🚀 ~ file: PermissionCheck.jsx:19 ~ PermissionCheck ~ PermissionCheck:", PermissionCheck)




export default PermissionCheck;