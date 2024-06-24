import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() data: Prisma.CartItemCreateInput) {
    return this.cartService.addToCart(data);
  }

  @Get(':userId')
  async getCart(@Param('userId') userId: number) {
    return this.cartService.getCart(userId);
  }

  @Put('update')
  async updateCart(@Body() body: { cartItemId: number; quantity: number }) {
    return this.cartService.updateCart(body.cartItemId, body.quantity);
  }

  @Delete('remove')
  async removeFromCart(@Body() body: { cartItemId: number }) {
    return this.cartService.removeFromCart(body.cartItemId);
  }
}
