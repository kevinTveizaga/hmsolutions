import { Test, TestingModule } from '@nestjs/testing';
import { BillingTypeService } from './billing-type.service';

describe('BillingTypeService', () => {
  let service: BillingTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingTypeService],
    }).compile();

    service = module.get<BillingTypeService>(BillingTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
