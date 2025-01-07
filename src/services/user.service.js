import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.users.findMany();
}

export const createUser = async (user) =>{
    return await prisma.users.create({
        data:user
    })
}

export const deleteUser = async(userId) =>{
    return await prisma.users.delete({
        where:{
            user_id: userId
        }
    })
}

export const updateUser = async(userId, user) =>{
    return await prisma.users.update({
        where:{
            user_id: userId
        },
        data:user
    })
}