import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Request } from '../co.entity';

@Injectable()
export class CoService {
    constructor(
        //@InjectRepository(OrderCls)
        //private orderRepository: Repository<OrderCls>,
    ) { }
    
    // async  findAll(): Promise<OrderCls[]> {
    //     return await this.orderRepository.find();
    // }

    async co(cartVM: Request): Promise<Request> {
        //return await this.orderRepository.save(contact);

        // code here for co request
        //cartVM.userBagItem[0].reqQty = 23;

        return cartVM;

    }

    // async update(contact: OrderCls): Promise<UpdateResult> {
    //     return await this.orderRepository.update(contact.id, contact);
    // }

    // async delete(id): Promise<DeleteResult> {
    //     return await this.orderRepository.delete(id);
    // }
}
