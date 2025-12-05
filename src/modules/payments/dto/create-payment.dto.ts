import { IsNumber, IsUUID } from 'class-validator';
export class CreatePaymentDto {
  @IsNumber()
  amount: number;
  @IsUUID()
  invoiceId: string;
  @IsUUID()
  userId: string;
}
