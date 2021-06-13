import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({ origin: 'https://url-shortner-backend-1.netlify.app', optionsSuccessStatus: 200 });
  await app.listen(3000);
}
bootstrap();
