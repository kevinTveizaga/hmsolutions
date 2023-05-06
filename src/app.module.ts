import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { postgresDataSourceOptions } from '../database/data-source';
@Module({
  imports: [TypeOrmModule.forRoot(postgresDataSourceOptions), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
