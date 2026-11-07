import { config } from 'dotenv';

config()

const apiConfig = {
    port: process.env.PORT ?? '3000',
    serverToken: process.env.SERVER_TOKEN ?? ""
}

export default apiConfig;