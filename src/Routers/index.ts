import express, { Router } from "express";
import DeviceRouter from "./DeviceRouter";

const router: Router = express.Router();

router.use([DeviceRouter]);

export default router;
