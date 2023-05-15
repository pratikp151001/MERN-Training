import { AddPostModel } from "../../Models/Post/PostModel";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class Postrepository {

    async addPost(Post: AddPostModel) {
        console.log("Repo called")

        let resposePost = await prisma.post.create({
            data: {
                type: Post.type,
                userId: Post.userId
            }
        })
        return resposePost
    }

    async getPosts(id: number) {
        console.log("get Posts Repo called")

        let resposePosts = await prisma.post.findMany(
            {
                where:
                {
                    userId: id
                }
            }
        )
        return resposePosts
    }
    async SearchPosts(id: number, wordtoSearch: string) {
        console.log("search Posts Repo called")
        console.log(wordtoSearch)
        let resposePosts = await prisma.post.findMany(

            {
                 
                where: {
                    userId: id,
                    type: { contains: wordtoSearch },

                },



                // select:{
                // tags:{
                //     where:{
                //         tagName:{contains:"H"}
                //     }
                // }
                // }
                // include:{

                //     tags:{
                //         where:{
                //             tagName:{contains:wordtoSearch}
                //         }
                //     }
                // },
                // include:{
                //     tags:{
                //         where:{
                //             tagName:{
                //                 contains:""
                //             }
                //         }
                //     }
                // }


            }
        )
        return resposePosts
    }
    async FilterPosts(id: number, postGT: number) {
        console.log("filter Posts Repo called")
        let PostGT: number = postGT as number
        // console.log(typeof(PostGT))

        let resposePosts = await prisma.post.findMany(
            {
                where:
                {
                    id: { gt: PostGT as number },
                    userId: id
                },
                orderBy:{
                    type:'asc'
                }
            }
        )
        return resposePosts
    }

    async SortPosts(id: number, sortIn: any) {
        console.log("sort Posts Repo called")
        if (sortIn != "asc") {
            sortIn = "desc"
        }



        let resposePosts = await prisma.post.findMany(
            {
                where:
                {

                    userId: id
                },
                orderBy: {
                    type: sortIn
                }
            }
        )
        return resposePosts
    }

    async DeletePosts(postid: any,id:number) {
        console.log("delete Posts Repo called")
        let PostID = (postid )
        console.log(typeof (PostID))
        let resposePosts = await prisma.post.deleteMany(
            {
                where:
                {AND:[
                    {id: parseInt(PostID )},{userId:id}]
                }
            }
        )
        return resposePosts
    }

    async UpdatePosts(postid: any,Post: AddPostModel) {
        console.log("update Posts Repo called")
        let PostID = (postid )
     //   console.log(typeof (PostID))
        let resposePosts = await prisma.post.updateMany(
            {where: {
                id: parseInt(PostID)
            },
                data: {
                    type: Post.type,
                    userId: Post.userId
                }
                
            }  
            
        )
        return resposePosts
    }
}
export default new Postrepository()