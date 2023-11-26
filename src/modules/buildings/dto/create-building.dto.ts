import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBuildingDto {
  @IsNotEmpty()
  name: string;
  @IsNumber()
  phone: number;
}
