export class UpdateCartDto {
  items?: {
    productId: number;
    quantity: number;
  }[];
}
