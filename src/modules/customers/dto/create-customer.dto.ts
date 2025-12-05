import { IsUUID, IsNumber, Min, Max } from 'class-validator';
export class CreateCustomerDto {
  @IsUUID()
  userId: string;
  @IsUUID()
  storeId: string;
  @IsNumber()
  creditLimit: number;
  @IsNumber()
  @Min(1)
  @Max(31)
  dueDay: number;
}
