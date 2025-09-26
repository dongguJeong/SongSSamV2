import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: '1234', description: '유저 이름' })
  @IsString()
  username: string;

  @ApiProperty({ example: '1234', description: '비밀번호' })
  @IsString()
  @MinLength(4)
  password: string;
}
