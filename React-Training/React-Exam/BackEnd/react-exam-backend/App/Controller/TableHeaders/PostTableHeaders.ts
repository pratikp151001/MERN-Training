import HeaderRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const PostTableHeaders = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: FetchTableHeaders.ts:52 ~ FetchHeaders ~ FetchHeaders:", PostTableHeaders)



    try {
        const data = req.body.tableHeaders
        console.log("🚀 ~ file: PostSuppliersData.ts:19 ~ PostSuppillerData ~ data:", data)

        let resp;
        if (data.header_id) {
            resp = await HeaderRepository.HeaderRepository.UpdateTableHeaders(data.data, data.header_id)

        }
        else {
            resp = await HeaderRepository.HeaderRepository.PostTableHeaders(data.data)

        }
        let response: responseModel = {
            status: 200,
            data: resp,
            error: null,

            message: "Suppilers Fetched successfully",
            success: true
        }

        res.json(response).status(200)
    }



    catch (e) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Fetch Suppilers",
            success: false
        }

        res.json(response).status(400)

    }
}

export default { PostTableHeaders }
