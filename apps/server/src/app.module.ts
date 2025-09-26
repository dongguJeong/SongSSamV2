import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      synchronize: true, // 개발용: 자동으로 테이블 생성/업데이트
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
