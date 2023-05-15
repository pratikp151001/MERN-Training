import { Request, Response } from "express";
import { AddTagsModel } from "../../Models/Tags/tagsModel";
import TagsRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";


const GetTags = async (req: Request, res: Response) => {
    console.log("Get Tags Called")

    try {
        let id=(req as any).data
       
      //  console.log("DSFSDfDSDSFDSFDSFDFSFFFFFFFFFFFFFFFFFf",id)

        let tags = await TagsRepo.Tagsrepository.GetTags(id)
        let response: responseModel = {
            status: 200,
            data: { Post: tags },
            error: null,

            message: "Tags Get successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Get tags",

        }

        res.send(response)

    }
}

export default { GetTags }