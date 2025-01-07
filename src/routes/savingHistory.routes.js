import { Router } from "express";
import * as savingController from "../controllers/savingHistory.controller.js"

const router = Router();

router.get('/savings',savingController.getAllSavings);
router.post('/savings',savingController.createSaving);
router.delete('/savings/:saving_history_id',savingController.deleteSaving);
router.put('/savings/:saving_history_id', savingController.updateSaving);

export default router;