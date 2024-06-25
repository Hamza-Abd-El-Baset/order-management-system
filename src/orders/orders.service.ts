import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { userId, status, items } = createOrderDto;
    return this.prisma.order.create({
      data: {
        userId,
        status,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({ where: { orderId: id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const { status, items } = updateOrderDto;
    return this.prisma.order.update({
      where: { orderId: id },
      data: {
        status,
        items: {
          update: items?.map((item) => ({
            where: { orderItemId: item.productId }, // Adjust the key based on your schema
            data: {
              productId: item.productId,
              quantity: item.quantity,
            },
          })),
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({ where: { orderId: id } });
  }
}
