import { IsNotEmpty } from 'class-validator';

export class CreateBillingTypeDto {
  @IsNotEmpty()
  name: string;
  description?: string;
}
