import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreCls } from '../store.entity';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(StoreCls)
        private objRepository: Repository<StoreCls>,
    ) { }
    
    async  findAll(): Promise<StoreCls[]> {
        return await this.objRepository.find();
    }

    async  create(contact: StoreCls): Promise<StoreCls> {
        return await this.objRepository.save(contact);
    }
}