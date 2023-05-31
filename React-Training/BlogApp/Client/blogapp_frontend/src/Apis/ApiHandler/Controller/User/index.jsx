import { LogInScheema } from "../../../../Validations/LoginValidations";
import { SignUpScheema } from "../../../../Validations/SignUpValidations";
import { CommanResponse } from "../../../ApiUtils/Model/CommonResponse"
import { UserService } from "../../Service/User";
// import { BlogService } from "../../Service/Blog";

export const UserController = {
    RegisterUser,LoginUser,GetAllUsers,DeleteUser,FetchProfile,UpdateProfile
};
async function RegisterUser(obj) {
    console.log("🚀 ~ file: index.jsx:9 ~ RegisterUser ~ obj:", obj)
    try {

        let responseOBJ = new CommanResponse();
        const isValid = await SignUpScheema.isValid(obj)

        if (isValid) {
           console.log("🚀 ~ file: index.jsx:16 ~ RegisterUser ~ isValid:", isValid)
           
            const response = await UserService.RegisterUser(obj)
            console.log("🚀 ~ file: index.jsx:19 ~ RegisterUser ~ obj:", obj)
            console.log("🚀 ~ file: index.jsx:19 ~ RegisterUser ~ response:", response)
            


            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
                console.log("🚀 ~ file: index.jsx:26 ~ InsertBlog ~ responseOBJ:", responseOBJ)

            }
        }
        else {
            alert("Obj in not valid")
        }
        return responseOBJ;

    }
    catch (error) {
        console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)

    }
}

async function LoginUser(obj) {
    console.log("🚀 ~ file: index.jsx:46 ~ LoginUser ~ obj:", obj)
    try {

        let responseOBJ = new CommanResponse();
        const isValid = await LogInScheema.isValid(obj)

        if (isValid) {
           console.log("🚀 ~ file: index.jsx:53 ~ LoginUser ~ isValid:", isValid)
           
            const response = await UserService.LoginUser(obj)
            console.log("🚀 ~ file: index.jsx:56 ~ LoginUser ~ response:", response)
           
            


            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
                console.log("🚀 ~ file: index.jsx:65 ~ LoginUser ~ responseOBJ:", responseOBJ)
                

            }
        }
        else {
            alert("Obj in not valid")
        }
        return responseOBJ;

    }
    catch (error) {
        console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)

    }
}

async function GetAllUsers() {
   console.log("🚀 ~ file: index.jsx:84 ~ GetAllUsers ~ GetAllUsers:", "GetAllUsers")
   
    try {

        let responseOBJ = new CommanResponse();

            const response = await UserService.FetchAllUsers()

            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
                console.log("🚀 ~ file: index.jsx:26 ~ InsertBlog ~ responseOBJ:", responseOBJ)

            }
       
        return responseOBJ;

    }
    catch (error) {
        console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)

    }
}

async function DeleteUser(id) {
    console.log("🚀 ~ file: index.jsx:110 ~ DeleteUser ~ DeleteUser:", "DeleteUser")
    
     try {
 
         let responseOBJ = new CommanResponse();
 
             const response = await UserService.DeleteUser(id)
 
             if (response) {
                 responseOBJ.Status = response?.status === 200 ? true : false;
                 responseOBJ.Result = response?.data ? response?.data : undefined;
                 responseOBJ.ResponseStatus = response.status;
                 console.log("🚀 ~ file: index.jsx:26 ~ InsertBlog ~ responseOBJ:", responseOBJ)
 
             }
        
         return responseOBJ;
 
     }
     catch (error) {
         console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)
 
     }
 }

 async function FetchProfile(id) {
    console.log("🚀 ~ file: index.jsx:136 ~ FetchProfile ~ id:", id)
    
     try {
 
         let responseOBJ = new CommanResponse();
 
             const response = await UserService.FetchProfile(id)
 
             if (response) {
                 responseOBJ.Status = response?.status === 200 ? true : false;
                 responseOBJ.Result = response?.data ? response?.data : undefined;
                 responseOBJ.ResponseStatus = response.status;
                 console.log("🚀 ~ file: index.jsx:148 ~ FetchProfile ~ responseOBJ:", responseOBJ)
 
             }
        
         return responseOBJ;
 
     }
     catch (error) {
         console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)
 
     }
 }
 
 async function UpdateProfile(id,userdetails) {
    console.log("🚀 ~ file: index.jsx:136 ~ FetchProfile ~ id:", id)
    
     try {
 
         let responseOBJ = new CommanResponse();
 
             const response = await UserService.UpdateProfile(id,userdetails)
 
             if (response) {
                 responseOBJ.Status = response?.status === 200 ? true : false;
                 responseOBJ.Result = response?.data ? response?.data : undefined;
                 responseOBJ.ResponseStatus = response.status;
                 console.log("🚀 ~ file: index.jsx:148 ~ FetchProfile ~ responseOBJ:", responseOBJ)
 
             }
        
         return responseOBJ;
 
     }
     catch (error) {
         console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)
 
     }
 }
 
 
