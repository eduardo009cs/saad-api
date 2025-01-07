import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getAllSavingUser = async() =>{
    return await prisma.savingsUsers.findMany({
        include:{
            savings_history: true,
            users:true            
        }
    })
}
export const createSavingUser = async(savingUser) =>{
    return await prisma.savingsUsers.createMany({
        data:savingUser
    })
}
export const updateSavingUser = async(savingUserId, savingUser) =>{
    return await prisma.savingsUsers.update({
        where:{
            savings_users_id:parseInt(savingUserId)
        },
        data:savingUser
    })
}
export const deleteSavingUser = async (savingUserId) => {
    return await prisma.savingsUsers.delete({
        where:{
            savings_users_id:savingUserId
        }
    })
}