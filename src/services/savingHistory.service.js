import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const getAllSavings = async () => {
    return await prisma.savingsHistory.findMany({
        orderBy:[
            {
                date:"desc"
            }
        ],
        include:{
            savings_users:{
                orderBy:{
                    user_id:"asc"
                },
                include:{
                    users: true
                }
            }
        }
    })
}

export const createSaving = async (saving) =>{
    return await prisma.savingsHistory.create({
        data: saving
    })
}

export const deleteSaving = async (savingHistoryId) => {
    return await prisma.savingsHistory.delete({
        where:{
            saving_history_id:parseInt(savingHistoryId)
        }
    })
}

export const updateSaving = async (savingHistoryId,saving) => {
    return await prisma.savingsHistory.update({
        where:{
            saving_history_id:parseInt(savingHistoryId)
        },
        body: saving
    })
}