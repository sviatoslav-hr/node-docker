import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3003;
const ENV = process.env.NODE_ENV || 'development';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    console.log(
      '\x1b[32m',
      `Running on port http://localhost:${PORT} in ${ENV} mode⚡`,
      '\x1b[37m',
    ),
  );
}

bootstrap();
