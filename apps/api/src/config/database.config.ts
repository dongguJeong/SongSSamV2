// apps/api/src/config/database.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'app',
  password: process.env.DB_PASSWORD || 'app',
  name: process.env.DB_NAME || 'songssam',
}));
