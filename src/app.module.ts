import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/src/users.module';
import { TypeOrmModuleConfig } from './config/data-source';
import { RolesModule } from './modules/roles/src/roles.module';
import { BillingModule } from './modules/billing/src/billing.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmModuleConfig),
    UsersModule,
    RolesModule,
    BillingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
