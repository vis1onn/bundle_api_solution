import express, { Router } from "express";
import { getBundle } from "../controllers/bundle";

const router: Router = express.Router();

router.get("/", getBundle);

export default router;
