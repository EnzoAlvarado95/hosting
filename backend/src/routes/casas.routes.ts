import { Router } from "express";
import { deleteCasas, getCasas, getIdCasas, postCasas, updateCasas } from "../controllers/casas.controller";

const router = Router();

router.get("/", getCasas);
router.get("/:id", getIdCasas);
router.post("/", postCasas);
router.put("/:id", updateCasas);
router.delete("/:id", deleteCasas);

export default router;
