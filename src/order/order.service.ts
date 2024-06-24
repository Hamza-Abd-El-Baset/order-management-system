import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order, Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async getOrderById(orderId: number): Promise<Order> {
    return this.prisma.order.findUnique({
      where: { orderId },
      include: { items: { include: { product: true } } },
    });
  }

  async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    return this.prisma.order.update({
      where: { orderId },
      data: { status },
    });
  }
}
