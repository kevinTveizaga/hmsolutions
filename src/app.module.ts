import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { postgresDataSourceOptions } from '../database/data-source';
import { RolesModule } from './modules/roles/roles.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(postgresDataSourceOptions),
    UsersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
