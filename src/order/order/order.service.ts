import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { OrderCls } from '../order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderCls)
        private orderRepository: Repository<OrderCls>,
    ) { }
    
    async  findAll(): Promise<OrderCls[]> {
        return await this.orderRepository.find();
    }

    async  create(contact: OrderCls): Promise<OrderCls> {
        return await this.orderRepository.save(contact);
    }

    async update(contact: OrderCls): Promise<UpdateResult> {
        return await this.orderRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.orderRepository.delete(id);
    }
}
