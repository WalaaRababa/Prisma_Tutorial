import { Request,Response } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
exports.createUser=async(req:Request,res:Response):Promise<void>=>
{
    const {email,name}=req.body;
    
    try {
        const user=await prisma.user.create({
            data:{
                email,
                name,
            }
        })
       res.status(201).json(user) 
    } catch (error:any) {
        console.log(error);
        
        res.status(500).json({
            message:'Error creating user',
            error:error.message
        })
    }
}
exports.getAllUser=async(req:Request,res:Response):Promise<void>=>
{
    try {
        const users=await prisma.user.findMany({
            include:{posts:true}
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message:'Error getting user',
            error:error
        })
    }
}