import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { postgresDataSourceOptions } from '../database/data-source';
import { RolesModule } from './modules/roles/roles.module';
import { BillingModule } from './modules/billing/billing.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(postgresDataSourceOptions),
    UsersModule,
    RolesModule,
    BillingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
