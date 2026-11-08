export interface DeviceRecord {
    device_id: string;
    trap_activation: boolean;
    temperature: number;
    humidity: number;
    battery_level: number;
    last_seen: Date
}

// this may be used in future if the number of devices reaches a high volume and server-side pagination is required
// offset = 0 & limit = 20 on first page of "/devices" in client, and offset increases by 20 as client moves through pages
export interface DeviceRequestQuery {
    offset?: number;
    limit?: number; // default 20 per page
}

export interface DeviceIDRequestQuery {
    device_id: string;
}