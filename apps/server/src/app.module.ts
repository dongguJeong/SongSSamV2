import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // DB 서버 주소
      port: 3306, // MySQL 기본 포트
      username: 'root', // MySQL 유저
      password: 'root', // MySQL 비밀번호
      database: 'songssam', // 연결할 DB 이름
      autoLoadEntities: true, // Entity 자동 로드
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
