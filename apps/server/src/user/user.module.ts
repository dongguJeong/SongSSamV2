import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User 엔티티를 TypeORM에 등록
  providers: [UserService], // 서비스 등록
  exports: [UserService], // 다른 모듈(Auth 등)에서 UserService 사용 가능하도록 export
})
export class UserModule {}
