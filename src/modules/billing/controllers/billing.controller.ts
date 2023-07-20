import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BillingService } from '../services/billing.service';
import { CreateBillingDto } from '../../../common/dto/CreateBillingDto';
import { Billing } from '../entities/billing.entity';
@Controller('api/billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Get()
  getAll() {
    return this.billingService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.billingService.findOne(id);
  }

  @Post(':id/userId')
  async createBilling(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() body: CreateBillingDto,
  ): Promise<Billing> {
    return await this.billingService.registerBilling(id, userId, body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.billingService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.billingService.delete(id);
  }
}
