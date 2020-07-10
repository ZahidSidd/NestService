import { Controller, Get } from '@nestjs/common';
import { OrderCls } from '../order.entity';
import { OrderService } from './order.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // @Get()
  // index(): Promise<OrderCls[]> {
  //   return this.orderService.findAll();
  // }

  @Get()
  index(): string {
    console.log('orderController.Index');
    return 'order.getter';
  }

  @Post('create')
  async create(@Body() orderData: OrderCls): Promise<any> {
    return this.orderService.create(orderData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() contactData: OrderCls): Promise<any> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id);
    return this.orderService.update(contactData);
  }

  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.orderService.delete(id);
  // }

  delete(): string {
    return 'orderdeletemthod';
  }
}
