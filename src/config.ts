import { config } from 'dotenv';

config()

const apiConfig = {
    port: process.env.PORT ?? '3000',
    serverToken: process.env.SERVER_TOKEN ?? '',
    filePath: process.env.FILE_PATH ?? '',
    apiToken: process.env.API_TOKEN ?? ''
}

export default apiConfig;