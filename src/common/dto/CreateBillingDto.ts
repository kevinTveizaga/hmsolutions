import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBillingDto {
  @IsNotEmpty({ message: 'Se debe llenar el numero del recibo' })
  invoiceNumber: number;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  coinType: string;
  @IsNotEmpty()
  literal: string;
  @IsNotEmpty()
  billingMonth: string;
  @IsNotEmpty()
  billingYear: number;
  @IsNotEmpty()
  floor: number;
  @IsNotEmpty()
  room: number;
  @IsNotEmpty()
  paymentMethod: string;
}
