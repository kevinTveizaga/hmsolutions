import { Module } from '@nestjs/common';
import { BillingController } from './controllers/billing.controller';
import { BillingService } from './services/billing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { BillingType } from './entities/billingType.entity';
import { User } from '../../users/src/entities/user.entity';
import { BillingTypeController } from './controllers/billing-type.controller';
import { BillingTypeService } from './services/billing-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Billing, BillingType])],
  controllers: [BillingController, BillingTypeController],
  providers: [BillingService, BillingTypeService],
})
export class BillingModule {}
