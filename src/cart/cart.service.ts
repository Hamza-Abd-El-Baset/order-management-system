import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem, Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(data: Prisma.CartItemCreateInput): Promise<CartItem> {
    return this.prisma.cartItem.create({ data });
  }

  async getCart(userId: number): Promise<CartItem[]> {
    return this.prisma.cartItem.findMany({
      where: { cart: { userId } },
      include: { product: true },
    });
  }

  async updateCart(cartItemId: number, quantity: number): Promise<CartItem> {
    return this.prisma.cartItem.update({
      where: { cartItemId },
      data: { quantity },
    });
  }

  async removeFromCart(cartItemId: number): Promise<CartItem> {
    return this.prisma.cartItem.delete({
      where: { cartItemId },
    });
  }
}
