import express from "express";
import { getAllDevices, getDeviceById } from "../Controllers/DeviceController";

const router = express.Router();

router.get("/devices", getAllDevices);
router.get("/devices/:device_id", getDeviceById);

export default router;
