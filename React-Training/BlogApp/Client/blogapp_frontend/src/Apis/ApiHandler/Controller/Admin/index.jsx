import { CommanResponse } from "../../../ApiUtils/Model/CommonResponse"
import { AdmiService } from "../../Service/Admin";


export const AdminController = {
    FetchPermissions
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
