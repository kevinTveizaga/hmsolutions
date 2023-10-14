import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleConfig } from './config/data-source';
import { UsersModule } from './modules/users/src/users.module';
import { RolesModule } from './modules/roles/src/roles.module';
import { BillingModule } from './modules/billing/src/billing.module';
import { AuthModule } from './modules/auth/auth.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync(TypeOrmModuleConfig),
    UsersModule,
    RolesModule,
    BillingModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
