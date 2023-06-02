export const UserEndPoints = {
    REGISTER_USER:"/registeruser",
    LOGIN_USER:"/loginuser",
    GETALL_USERS:"/getallusers",
    DELETE_USER:(id)=>`/deleteuser/${id}`,
    FETCH_PROFILE:(id)=>`/getuserbyid/${id}`,
    UPDATE_PROFILE:(id)=>`/updateuser/${id}`,
    PROFILE:`/profile`
   
  };
  