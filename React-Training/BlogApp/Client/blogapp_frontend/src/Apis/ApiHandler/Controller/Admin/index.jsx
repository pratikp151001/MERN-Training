import { CommanResponse } from "../../../ApiUtils/Model/CommonResponse"
import { AdmiService } from "../../Service/Admin";


export const AdminController = {
    FetchPermissions,AddRole,FetchRole
};
async function FetchPermissions() {
    console.log("🚀 ~ file: index.jsx:9 ~ FetchPermissions ~ FetchPermissions:", FetchPermissions)
    try {

        let responseOBJ = new CommanResponse();
        // const isValid = await BlogScheema.isValid(obj)


        const response = await AdmiService.GetPermissions()

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


async function AddRole(role) {
    console.log("🚀 ~ file: index.jsx:38 ~ AddRole ~ role:", role)
    try {

        let responseOBJ = new CommanResponse();
        // const isValid = await BlogScheema.isValid(obj)


        const response = await AdmiService.AddRoles(role)

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
            console.log("🚀 ~ file: index.jsx:51 ~ AddRole ~ responseOBJ:", responseOBJ)

        }


        return responseOBJ;

    }
    catch (error) {
        console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)

    }
}


async function FetchRole() {
   console.log("🚀 ~ file: index.jsx:67 ~ FetchRole ~ FetchRole:", FetchRole)
   
    try {

        let responseOBJ = new CommanResponse();
        // const isValid = await BlogScheema.isValid(obj)


        const response = await AdmiService.FetchRoles()

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
            console.log("🚀 ~ file: index.jsx:51 ~ AddRole ~ responseOBJ:", responseOBJ)

        }


        return responseOBJ;

    }
    catch (error) {
        console.log("🚀 ~ file: index.jsx:6 ~ InsertBlog ~ error:", error)

    }
}
