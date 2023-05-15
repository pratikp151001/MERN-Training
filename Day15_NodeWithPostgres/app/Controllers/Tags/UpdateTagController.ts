import { Request, Response } from "express";
import { AddTagsModel } from "../../Models/Tags/tagsModel";
import TagsRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";
import { AddPostModel } from "../../Models/Post/PostModel";


const UpdateTags = async (req: Request, res: Response) => {
    console.log("Update Tags Called")

    try {
        let id = (req as any).data
        let idtoUpdate=req.params.id
        const tag: AddTagsModel = {
            // type: req.body.PostType,
            // userId: id,
            tagName: req.body.tagName
        }
        const post: AddPostModel = {
            type: req.body.PostType,
            userId: id

        }
        console.log("DSFSDfDSDSFDSFDSFDFSFFFFFFFFFFFFFFFFFf", id)

        let tags = await TagsRepo.Tagsrepository.UpdateTags(tag,post,parseInt(idtoUpdate))
        let response: responseModel = {
            status: 200,
            data: { Post: tags },
            error: null,

            message: "Tags Update successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Update Tags",

        }

        res.send(response)

    }
}

export default { UpdateTags }