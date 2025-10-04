// apps/api/src/config/config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 ConfigService 사용 가능
      envFilePath: '.env', // 기본은 루트 .env
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(3306),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
