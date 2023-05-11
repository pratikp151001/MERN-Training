import { AddTagsModel } from "../../Models/Tags/tagsModel";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class Tagsrepository {

    async addTags(tag:any) {
        console.log("Repo called",tag)

        let resposePost = await prisma.tags.create({
            data: {
                
                tagName:tag.tagName,
                posts:{
                    create:[
                        {type:tag.type,userId:tag.userId},{type:tag.type,userId:tag.userId}
                    ]
                }
            }
        })
        return resposePost
        // let responseTag=await prisma.tags.findMany({
        //     include:{
        //         posts:{
        //             where:{
        //                 userId:tag.userId,
                        
        //             }
        //         }
        //     }
        // })
        // return responseTag
     }

   
}
export default new Tagsrepository()