import SuppilerRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const PostSuppillerData = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: PostSuppliersData.ts:48 ~ PostSuppillerData ~ PostSuppillerData:", PostSuppillerData)

    try {

        // let id = (req as any).data
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)

        // let id=req.params.id
        // console.log("🚀 ~ file: GetUserbyId.ts:14 ~ FetchUserById ~ id:", id)
        const data = req.body.data
        console.log("🚀 ~ file: PostSuppliersData.ts:19 ~ PostSuppillerData ~ data:", data)

        const DATAArray: any = []
        // console.log("object",typeof(req.body.Column1))

        data.map((row: any, index: number) => {

            const DATA = {
                values: {
                    Column1: parseInt(row.Column1),
                    Column2: parseInt(row.Column2),
                    Column3: parseInt(row.Column3),
                    Column4: parseInt(row.Column4),
                    Column5: parseInt(row.Column5),
                    Column6: parseInt(row.Column6),
                    Column7: parseInt(row.Column7),
                    Column8: parseInt(row.Column8),
                    Column9: parseInt(row.Column9),
                    Column10: parseInt(row.Column10),
                    sup_id: row.sup_id,
                    month: row.month,
                    Net: parseInt(row.Net),
                    VAT: parseInt(row.VAT),
                    Advance: parseInt(row.Advance),
                    Balance: parseInt(row.Balance),
                    isApprove: false
                },
                invoice_id: row.invoice_id
            }

            DATAArray.push(DATA)


        })

        console.log("🚀 ~ file: PostSuppliersreq.body.ts:32 ~ PostSuppillerData ~ DATA:", DATAArray)

        let resData: any = []
        DATAArray.map(async (datA: any, index: number) => {
            console.log("🚀 ~ file: PostSuppliersData.ts:59 ~ DATAArray.map ~ datA.invoice_id:", datA.invoice_id)
            if (datA.invoice_id==null ){
                const postedData = await SuppilerRepository.SuppilerRepository.PostData(datA.values)
                console.log("🚀 ~ file: PostSuppliersData.ts:61 ~ DATAArray.map ~ postedData:", postedData)
            resData.push(postedData)
            }
            else{
                const postedData = await SuppilerRepository.SuppilerRepository.UpdateData(datA.values,datA.invoice_id)
                resData.push(postedData)
            }
        })
        console.log("🚀 ~ file: PostSuppliersData.ts:57 ~ PostSuppillerData ~ resData:", resData)



        let response: responseModel = {
            status: 200,
            data: resData,
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

export default { PostSuppillerData }
