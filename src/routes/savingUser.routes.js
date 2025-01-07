import { Router } from "express";
import * as savingUserController from "../controllers/savingUser.controller.js"

const router = Router();

router.get('/savingUsers',savingUserController.getAllSavingsUsers);
router.post('/savingUsers',savingUserController.createUser);
router.delete('/savingUsers/:saving_user_id',savingUserController.deleteUser);
router.put('/savingUsers/:saving_user_id', savingUserController.updateUser);

export default router;