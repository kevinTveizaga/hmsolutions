import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Billing } from '../entities/billing.entity';
import { Repository } from 'typeorm';
import { CreateBillingDto } from 'src/common/dto/CreateBillingDto';
import { User } from 'src/modules/users/entities/user.entity';
import { BillingType } from '../entities/billingType.entity';
import { CreateBillingTypeDto } from 'src/common/dto/CreateBillingTypeDto';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Billing) private billingRepo: Repository<Billing>,
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(BillingType)
    private billingTypeRepo: Repository<BillingType>,
  ) {}

  findAll() {
    return this.billingRepo.find();
  }

  findOne(id: number) {
    return this.billingRepo.findBy({ id: id });
  }

  async registerBillingType(body: CreateBillingTypeDto): Promise<BillingType> {
    const newBillingType = new BillingType();
    newBillingType.name = body.name;
    newBillingType.description = body.description;
    return await this.billingRepo.save(newBillingType);
  }

  async registerBilling(
    id: number,
    userId: number,
    body: CreateBillingDto,
  ): Promise<Billing> {
    const billingService = await this.billingTypeRepo.findOneBy({ id: id });
    const user = await this.usersRepo.findOneBy({ id: userId });
    const newBill = new Billing();
    if (user && billingService) {
      newBill.invoiceNumber = body.invoiceNumber;
      newBill.bililngType = billingService.id;
      newBill.customerId = user.id;
      newBill.amount = body.amount;
      newBill.coinType = body.coinType;
      newBill.literal = body.literal;
      newBill.billingMonth = body.billingMonth;
      newBill.billingYear = body.billingYear;
      newBill.floor = body.floor;
      newBill.room = body.room;
      newBill.paymentMethod = body.paymentMethod;
    }
    return await this.billingRepo.save(newBill);
  }

  async update(id: number, body: any) {
    const bill = await this.billingRepo.findOne({
      where: {
        id: body.id,
      },
    });
    this.billingRepo.merge(bill, body);
    return this.billingRepo.save(bill);
  }

  async delete(id: any) {
    await this.billingRepo.delete(id);
    return true;
  }
}
