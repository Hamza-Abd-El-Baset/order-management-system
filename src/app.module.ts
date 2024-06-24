import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule, ProductModule, CartModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
