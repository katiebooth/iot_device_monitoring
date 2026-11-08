Server for retrieving device information - either all devices or by device ID.
Uses Bearer token authorisation mechanism.
Currently reads data from json in file system - could be extended to read from database.

Instructions:

Install dependencies
npm install

Run in developer mode
npm run dev

Build
npm run build


Endpoints:
1. Get information for all devices
GET request to /internal/devices
2. Get information for a specific device
GET request to /internal/devices/:device_id
