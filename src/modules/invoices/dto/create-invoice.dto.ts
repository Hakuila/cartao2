import { IsUUID, IsNumber, Min, Max } from 'class-validator';
export class CreateInvoiceDto {
  @IsUUID()
  customerId: string;
  @IsNumber()
  @Min(1)
  @Max(12)
  month: number;
  @IsNumber()
  year: number;
}
