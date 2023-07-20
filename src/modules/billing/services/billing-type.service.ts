import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillingType } from '../entities/billingType.entity';
import { Repository } from 'typeorm';
import { CreateBillingTypeDto } from 'src/common/dto/CreateBillingTypeDto';

@Injectable()
export class BillingTypeService {
  constructor(
    @InjectRepository(BillingType)
    private billingTypeRepo: Repository<BillingType>,
  ) {}

  findAll() {
    return this.billingTypeRepo.find();
  }

  findOne(id: number) {
    return this.billingTypeRepo.findBy({ id: id });
  }

  async registerBillingType(body: CreateBillingTypeDto): Promise<BillingType> {
    const newBillingType = new BillingType();
    newBillingType.name = body.name;
    newBillingType.description = body.description;
    return await this.billingTypeRepo.save(newBillingType);
  }

  async update(id: number, body: any) {
    const bill = await this.billingTypeRepo.findOne({
      where: {
        id: body.id,
      },
    });
    this.billingTypeRepo.merge(bill, body);
    return this.billingTypeRepo.save(bill);
  }

  async delete(id: any) {
    await this.billingTypeRepo.delete(id);
    return true;
  }
}
