// apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 유효성 검사 (class-validator DTO용)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // CORS 허용 (프론트 web/와 연동 시 필요)
  app.enableCors({
    origin: 'http://localhost:5173', // React (Vite) dev 서버 주소
    credentials: true,
  });

  await app.listen(3000);
  console.log(`🚀 API 서버 실행 중: http://localhost:3000`);
}
bootstrap();
