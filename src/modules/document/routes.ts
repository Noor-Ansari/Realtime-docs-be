import express from "express";

import { getDocById, createDoc, updateDoc } from "./controllers";

const router = express.Router();

router.get("/:id", getDocById);
router.post("/", createDoc);
router.patch("/", updateDoc);

export default router;
