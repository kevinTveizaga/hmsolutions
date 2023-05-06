import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class AppDataSource implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rick',
      password: 'rick_HUNTER1980',
      database: 'hmsolutions_db',
      entities: [__dirname + '/../**/*.entity{.ts}'],
      synchronize: false,
      migrationsRun: true,
      logging: true,
    };
  }
}
