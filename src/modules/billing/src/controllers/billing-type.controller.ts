import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BillingTypeService } from '../services/billing-type.service';
import { CreateBillingTypeDto } from 'src/common/dto/CreateBillingTypeDto';

@Controller('api/billing-type')
export class BillingTypeController {
  constructor(private billingTypeService: BillingTypeService) {}

  @Get()
  getAll() {
    return this.billingTypeService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.billingTypeService.findOne(id);
  }

  @Post()
  async createBillingType(@Body() body: CreateBillingTypeDto) {
    return await this.billingTypeService.registerBillingType(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.billingTypeService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.billingTypeService.delete(id);
  }
}
