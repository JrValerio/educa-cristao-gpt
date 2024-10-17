import express from "express";
import { obterResposta } from "../controllers/chatController.js";

const router = express.Router();

router.post("/perguntar", obterResposta);

export default router;
