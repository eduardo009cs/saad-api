import { Router } from "express";
import * as userController from "../controllers/user.controller.js"

const router = Router();

router.get('/users',userController.getAllUsers);
router.post('/users',userController.createUser);
router.delete('/users/:user_id',userController.deleteUser);
router.put('/users/:user_id', userController.updateUser);

export default router;