import { NestFactory } from '@nestjs/core';
import { AppModule } from './feed/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // /api/
  await app.listen(3000);
}
bootstrap();
