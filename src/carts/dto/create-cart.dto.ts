export class CreateCartDto {
  userId: number;
  items: {
    productId: number;
    quantity: number;
  }[];
}
