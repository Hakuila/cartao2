import { IsNumber, IsUUID } from 'class-validator';
export class CreateTransactionDto {
  @IsNumber()
  amount: number;
  @IsUUID()
  customerId: string;
  @IsUUID()
  userId: string;
}
