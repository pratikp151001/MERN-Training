import { AddTagsModel } from "../../Models/Tags/tagsModel";
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

class Tagsrepository {

    async addTags(tag:any,post:any) {
        console.log("Repo called",tag)

        let resposePost = await prisma.tags.create({
            data: {
                
                tagName:tag.tagName,
                posts:{
                    create:[
                        {type:post.type,userId:post.userId},{type:post.type,userId:post.userId}
                    ]
                }
            }
        })
        return resposePost
        
     }
     async GetTags(id:number) {
        console.log("Repo called",id)

       let responseTag=await prisma.user.findMany({
        where:{
            id:id
        },
            include:{
                post:{
                    include:{
                        tags:true
                    }
                }
            }
        })
        return responseTag
    }
    async DeleteTags(tagidtodelete:number) {
        console.log("delete tags repo called",tagidtodelete)

        let resposePost = await prisma.tags.delete({
            where:{
                id:tagidtodelete
            }
        })
        return resposePost
        
     }

     async UpdateTags(tag:any,post:any,idtoUpdate:number) {
        console.log("update tags repo called",idtoUpdate)

        let resposePost = await prisma.tags.update({
            where:{
                id:idtoUpdate
            },
            data:{
                
                tagName:tag.tagName,
                posts:{
                    create:[
                        {type:post.type,userId:post.userId},{type:post.type,userId:post.userId}
                    ]
                }
            }
        })
        return resposePost
        
     }

   
}
export default new Tagsrepository()