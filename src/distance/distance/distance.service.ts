import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { DistanceCls } from '../distance.entity';

@Injectable()
export class DistanceService {
    constructor(
        @InjectRepository(DistanceCls)
        private objRepository: Repository<DistanceCls>,
    ) { }
    
    async  findAll(): Promise<DistanceCls[]> {
        return await this.objRepository.find();
    }

    async  create(contact: DistanceCls): Promise<DistanceCls> {
        return await this.objRepository.save(contact);
    }
}