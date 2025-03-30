import { Router } from "express";
import * as sendMessageController from "../controllers/sendMessage.controller.js"

const router = Router();

router.post('/sendMessage',sendMessageController.sendMessage);

export default router;