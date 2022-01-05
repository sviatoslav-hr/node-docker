import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import dotenv from 'dotenv';
import { ConfigService } from './config/config.service';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  await app.listen(config.port, () =>
    console.log(
      '\x1b[32m',
      `Running on port http://localhost:${config.port} in ${config.env} mode⚡`,
      '\x1b[37m',
    ),
  );
}

bootstrap();
