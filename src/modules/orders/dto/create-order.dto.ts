import { IsUUID, IsNumber } from 'class-validator';
export class CreateOrderDto {
  @IsUUID()
  customerId: string;
  @IsUUID()
  productId: string;
  @IsNumber()
  quantity: number;
}
