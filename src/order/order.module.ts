import { Module } from '@nestjs/common';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderCls } from './order.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderCls]),
      ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
