import app from './app';
import apiConfig from './config';

process.on('uncaughtException', (error, origin) => {
  console.error({ error, origin }, 'uncaughtException:');
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error({ reason, promise }, 'unhandledRejection:');
  process.exit(1);
});

const port = apiConfig.port;

app.listen(port, () => {
      console.log(`Listening on port ${port} 🚀🚀🚀`);
});