import { AddPostModel } from "../../Models/Post/AddPostModel";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class Postrepository {

    async registerUser(Post: AddPostModel) {
        console.log("Repo called")

        let resposePost = await prisma.post.create({
            data: {
               type:Post.type,
               userId:Post.userId
            }
        })
        return resposePost
    }
    async getPosts(id :string) {
        console.log("get Posts Repo called")

        let resposePosts= await prisma.post.findMany(
            {
                where:
                {
                    userId:id
                }
            }
        )
        return resposePosts
    }

}
export default new Postrepository();