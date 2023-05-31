import { BlogScheema } from "../../../../Validations/AddBlogValidations"
import { CommanResponse } from "../../../ApiUtils/Model/CommonResponse"
import { BlogService } from "../../Service/Blog";

export const BlogController = {
    InsertBlog, GetAllBlog,DeleteBlog,GetSingleBlog
};
async function InsertBlog(obj) {
    console.log("🚀 ~ file: index.jsx:9 ~ InsertBlog ~ InsertBlog:", InsertBlog)
    try {

        let responseOBJ = new CommanResponse();
        const isValid = await BlogScheema.isValid(obj)

        if (isValid) {
            console.log("🚀 ~ file: index.jsx:16 ~ InsertBlog ~ isValid:", isValid)
            const response = await BlogService.createBlog(obj)
            console.log("🚀 ~ file: index.jsx:18 ~ InsertBlog ~ response:", response)
            console.log("🚀 ~ file: index.jsx:18 ~ InsertBlog ~ obj:", obj)


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

async function GetAllBlog() {
    console.log("🚀 ~ file: index.jsx:43 ~ GetAllBlog ~ GetAllBlog:", GetAllBlog)

    try {

        let responseOBJ = new CommanResponse();



        const response = await BlogService.GetAllBlog()
       

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
            console.log("🚀 ~ file: index.jsx:58 ~ GetAllBlog ~ responseOBJ:", responseOBJ)
           


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



async function DeleteBlog(id) {
console.log("🚀 ~ file: index.jsx:78 ~ DeleteBlog ~ DeleteBlog:", DeleteBlog)

    try {

        let responseOBJ = new CommanResponse();



         const response = await BlogService.DeleteBlog(id)
       

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
            console.log("🚀 ~ file: index.jsx:93 ~ DeleteBlog ~ responseOBJ:", responseOBJ)
           


        }
        else {
            alert("Obj in not valid")
        }
        return responseOBJ;

    }
    catch (error) {
    console.log("🚀 ~ file: index.jsx:105 ~ DeleteBlog ~ error:", error)

    }
}



async function GetSingleBlog(id) {
    console.log("🚀 ~ file: index.jsx:113 ~ GetSingleBlog ~ id:", id)
    console.log("🚀 ~ file: index.jsx:113 ~ GetSingleBlog ~ GetSingleBlog:", "GetSingleBlog")
    
        try {
    
            let responseOBJ = new CommanResponse();
            // console.log("🚀 ~ file: index.jsx:118 ~ GetSingleBlog ~ responseOBJ:", responseOBJ)
    
    
    
             const response = await BlogService.FetchSingleBlog(id)
             console.log("🚀 ~ file: index.jsx:123 ~ GetSingleBlog ~ id:", response)
           
    
            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
                console.log("🚀 ~ file: index.jsx:128 ~ GetSingleBlog ~ responseOBJ:", responseOBJ)
               
    
    
            }
            else {
                alert("Obj in not valid")
            }
            return responseOBJ;
    
        }
        catch (error) {
        console.log("🚀 ~ file: index.jsx:105 ~ DeleteBlog ~ error:", error)
    
        }
    }