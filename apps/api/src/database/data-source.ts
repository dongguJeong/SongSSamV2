import { DataSource } from 'typeorm';
import { join } from 'path';
import { User } from 'src/users/entities/user.entity';
import { Job } from 'src/jobs/entities/job.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USER || 'app',
  password: process.env.DB_PASSWORD || 'app',
  database: process.env.DB_NAME || 'songssam',

  // CLI에서도 잘 잡히도록 glob 패턴 + 직접 import 병행
  entities: [User, Job, join(__dirname, 'src/**/*.entity{.ts,.js}')],

  migrations: [join(__dirname, 'src/migrations/*{.ts,.js}')],

  // 개발은 자동 테이블 반영, 운영은 마이그레이션만
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
});
