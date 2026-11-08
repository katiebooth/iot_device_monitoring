import { Request, Response } from "express";
import { DeviceIDRequestQuery, DeviceRecord, DeviceRequestQuery } from "../types";
import { loadJson } from "../Services/DeviceService";
import apiConfig from "../config";

export const getAllDevices = async (req: Request<DeviceRequestQuery, unknown, unknown>, res: Response) => {
  try {
    // in practice, the data would be fetched from a database "READ" query
    // assuming data volume is low, return all devices
    // pagination may be used if number of devices is large & database query to fetch is complex
    // this type assignment would be done using a generic in a database handler
    const allDevices: DeviceRecord[] = await loadJson(apiConfig.filePath);
    res.json(allDevices);
  } catch (error: unknown) {
    // catch both file read & parsing errors, log error & return friendly error-message to client
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "ENOENT") {
        console.log("File not found", error);
      }
    } else console.log("Error parsing file", error);
    res.status(500).json({ error: "Could not retrieve devices." });
  }
};

export const getDeviceById = async (
  req: Request<DeviceIDRequestQuery, unknown, unknown>,
  res: Response,
) => {
  const { device_id } = req.params;
  try {
    // the data would be fetched from a database "READ" query
    // this type assignment would be done using a generic in a database handler
    const allDevices: DeviceRecord[] = await loadJson(apiConfig.filePath);
    console.log(device_id)
    const requestedDevice = allDevices.filter(
      (device) => device.device_id === device_id,
    );
    if (requestedDevice.length === 0) {
      console.log(`Could not find device ID: ${device_id}`);
      res.status(404).json({ error: "Could not retrieve requested device." });
      return;
    }
    res.json(requestedDevice);
  } catch (error) {
    // catch both file read & parsing errors, log error & return friendly error-message to client
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "ENOENT") {
        console.log("File not found", error);
      }
    } else console.log("Error parsing file", error);
    res.status(500).json({ error: "Could not retrieve device information." });
  }
};
