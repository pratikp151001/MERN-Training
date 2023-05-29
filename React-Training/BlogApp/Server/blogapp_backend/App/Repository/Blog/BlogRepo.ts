import { PrismaClient } from "@prisma/client"
import { BlogModel } from "../../Model/BlogModel";

const prisma = new PrismaClient()

class BlogRepository {
    async AddBlog(blog: BlogModel) {
        let Blog=await prisma.blog.create({
            data:{
                title:blog.title,
                description:blog.description,
                category:blog.category
            }
        })
        return Blog;
    }

    async FetchBlog() {
        let Blog=await prisma.blog.findMany()
        return Blog;
    }
    async DeleteBlog(idtodelete:string) {
        let Blog=await prisma.blog.delete({where:{id:idtodelete}})
        return Blog;
    }
    async FetchsingleBlog(idtodelete:string) {
        let Blog=await prisma.blog.findMany({where:{id:idtodelete}})
        return Blog;
    }

    async UpdateBlog(blog: BlogModel,id:string) {
        let Blog=await prisma.blog.update({
            where:{id:id},
            data:{
                title:blog.title,
                description:blog.description,
                category:blog.category
            }
        })
        return Blog;
    }
}

export default new BlogRepository;