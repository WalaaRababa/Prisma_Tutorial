import { Request,Response } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
exports.createPost=async(req:Request,res:Response):Promise<void>=>
{
    const {title,body,authorId}=req.body;
    
    try {
        const post=await prisma.post.create({
            data:{
                title,
                body,
                authorId,
            }
        })
       res.status(201).json(post) 
    } catch (error:any) {
        
        res.status(500).json({
            message:'Error creating post',
            error:error.message
        })
    }
}
exports.getAllPost=async(req:Request,res:Response):Promise<void>=>
{
    try {
        const posts=await prisma.post.findMany({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message:'Error getting posts',
            error:error
        })
    }
}