import * as sh from "../services/savingHistory.service.js"
import { response } from "../utils/responseMessages.js"


export const getAllSavings = async (req, res) =>{
    try {
        const savings = await sh.getAllSavings()
        if(!savings){
            return res.status(400).json(response["400"])
        }
        res.status(200).json(savings)
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}

export const createSaving = async (req, res) => {
    try {
        const saving = await sh.createSaving(req.body);
        
        if(!saving){
            return res.status(400).json(response["404"])
        }
        let response1 = response["201"]
        
        response1["lastSavingId"] = saving.saving_history_id
        
        res.status(201).json(response1);
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
        
    }
}

export const deleteSaving = async (req, res) => {
    try {
        const savingDeleted = await sh.deleteSaving(req.params.saving_history_id)
        if(!savingDeleted){
            return res.status(404).json(response["404"])
        }
        res.status(200).json(response["200"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}

export const updateSaving = async (req, res) => {
    try {
        const savingUpdated = await sh.updateSaving(req.params.saving_history_id)

        if(!savingUpdated){
           return res.status(404).json(response["404"])
        }
        res.status(200).json(response["200"])
    } catch (error) {
        console.log(error)
        return res.status(500).json(response["500"])
    }
}