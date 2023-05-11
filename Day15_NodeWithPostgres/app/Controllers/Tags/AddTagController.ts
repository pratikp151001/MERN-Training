import { Request, Response } from "express";
import { AddTagsModel } from "../../Models/Tags/tagsModel";
import TagsRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";


const AddTags = async (req: Request, res: Response) => {
    console.log("Add Post Called")

    try {
        let id=(req as any).data
        const tag = {
            type: req.body.PostType,
            userId: id,
            tagName:req.body.tagName
        }
        console.log("DSFSDfDSDSFDSFDSFDFSFFFFFFFFFFFFFFFFFf",id)

        let tags = await TagsRepo.Tagsrepository.addTags(tag)
        let response: responseModel = {
            status: 200,
            data: { Post: tags },
            error: null,

            message: "Post Added successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Add Post",

        }

        res.send(response)

    }
}

export default { AddTags }