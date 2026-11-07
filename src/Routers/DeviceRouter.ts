import express from "express";

const router = express.Router();

router.get("/devices", getAllDevices);
router.get("/devices/:device_id", getDeviceById);

export default router;
