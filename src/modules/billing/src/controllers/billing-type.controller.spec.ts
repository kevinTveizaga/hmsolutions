import { Test, TestingModule } from '@nestjs/testing';
import { BillingTypeController } from './billing-type.controller';

describe('BillingTypeController', () => {
  let controller: BillingTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingTypeController],
    }).compile();

    controller = module.get<BillingTypeController>(BillingTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
