import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST', '127.0.0.1'),
        port: +config.get<number>('DB_PORT', 3306),
        username: config.get('DB_USER', 'app'),
        password: config.get('DB_PASSWORD', 'app'),
        database: config.get('DB_NAME', 'songssam'),
        entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
        synchronize: process.env.NODE_ENV !== 'production',
        logging: process.env.NODE_ENV !== 'production',
      }),
    }),
  ],
})
export class DatabaseModule {}
