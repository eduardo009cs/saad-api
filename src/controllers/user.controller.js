import * as userService from '../services/user.service.js'
import { response } from '../utils/responseMessages.js'

export const getAllUsers = async (req, res) =>{
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        const users = await userService.getAllUsers()
        
        if(users.length === 0){
            return res.status(400).json(response["400"])
        }
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}


export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        if(!user){
            return res.status(400).json(response["400"])
        }
        res.status(201).json(response["201"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
        
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userDeleted = await userService.deleteUser(req.params.user_id)
        if(!userDeleted){
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
        const userUpdated = await userService.updateUser(req.params.user_id, req.body)

        if(!userUpdated){
            return res.status(400).json(response["404"])
        }
        res.status(200).json(response["200"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}