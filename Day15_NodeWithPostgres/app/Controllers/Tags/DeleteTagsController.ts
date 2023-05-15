import { Request, Response } from "express";
import { AddTagsModel } from "../../Models/Tags/tagsModel";
import TagsRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";


const DeleteTags = async (req: Request, res: Response) => {
    console.log("delete Tags Called")

    try {
         let tagidtodelete=req.params.id
         console.log(tagidtodelete)
        let tags = await TagsRepo.Tagsrepository.DeleteTags(parseInt(tagidtodelete))
        let response: responseModel = {
            status: 200,
            data: { Post: tags },
            error: null,

            message: "Tags Delete successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Delete tags",

        }

        res.send(response)

    }
}

export default { DeleteTags }