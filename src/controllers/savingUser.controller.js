import * as savingUserService from '../services/savingUser.service.js'
import { response } from '../utils/responseMessages.js'

export const getAllSavingsUsers = async (req, res) =>{
    try {
        
        const savingUser = await savingUserService.getAllSavingUser()
        
        if(savingUser.length === 0){
             return res.status(400).json(response["400"])
        }
        res.status(200).json(savingUser)
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}


export const createUser = async (req, res) => {
    try {
        const savingUser = await savingUserService.createSavingUser(req.body);

        if(!savingUser){
            return res.status(400).json(response["400"])
        }
        return res.status(201).json(response["201"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
        
    }
}

export const deleteUser = async (req, res) => {
    try {
        const savingUserDeleted = await savingUserService.deleteSavingUser(req.params.saving_user_id)
        if(!savingUserDeleted){
            return res.status(400).json(response["404"])
        }
        res.status(200).json(response["200"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}

export const updateUser = async (req, res) => {
    try {
        const savingUserUpdated = await savingUserService.updateSavingUser(req.params.saving_user_id,req.body)

        if(!savingUserUpdated){
            return res.status(400).json(response["404"])
        }
        res.status(200).json(response["200"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}