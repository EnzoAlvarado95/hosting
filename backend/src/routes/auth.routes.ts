import { Router } from "express";
import { register, activate, login, forgot, reset } from "../controllers/auth.controller";

const router = Router();
router.post("/register", register);
router.post("/activate", activate);
router.post("/login", login);
router.post("/forgot", forgot);
router.post("/reset", reset);

export default router;
