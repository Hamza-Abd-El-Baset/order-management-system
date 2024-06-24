import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() data: Prisma.OrderCreateInput) {
    return this.orderService.createOrder(data);
  }

  @Get(':orderId')
  async getOrderById(@Param('orderId') orderId: number) {
    return this.orderService.getOrderById(orderId);
  }

  @Put(':orderId/status')
  async updateOrderStatus(
    @Param('orderId') orderId: number,
    @Body() body: { status: string },
  ) {
    return this.orderService.updateOrderStatus(orderId, body.status);
  }
}
