export class UpdateOrderDto {
  status?: string;
  items?: {
    productId: number;
    quantity: number;
  }[];
}
