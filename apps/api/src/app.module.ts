// apps/api/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

// 도메인 모듈 import (예: Users, Jobs)
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    // .env 로드 (전역)
    ConfigModule.forRoot({ isGlobal: true }),

    // DB 연결 모듈
    DatabaseModule,

    // 도메인 모듈들
    UsersModule,
    JobsModule,
  ],
})
export class AppModule {}
