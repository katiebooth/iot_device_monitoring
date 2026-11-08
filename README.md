Device Monitoring API

A node.js and Tyepscript Server for retrieving device information - either all devices or by device ID.
Uses Bearer token authorisation mechanism.
Currently reads data from json in file system - could be extended to read from database.

Set Up

Install Dependencies

npm install

Run in Development Mode

npm run dev

Build the Project

npm run build


Running the project

1. Get information for all devices
GET request to /internal/devices
2. Get information for a specific device
GET request to /internal/devices/:device_id

Authentication:

Include a Bearer token in the request headers:

Authorization: Bearer YOUR_API_TOKEN

Replace YOUR_API_TOKEN with your configured API token.
