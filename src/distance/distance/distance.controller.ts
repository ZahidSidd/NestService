import { Controller, Get } from '@nestjs/common';
import { DistanceCls } from '../distance.entity'
import { DistanceService } from './distance.service';

import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('distance')
export class DistanceController {
    constructor(private objService: DistanceService){}

    @Get()
    index(): Promise<DistanceCls[]> {
      return this.objService.findAll();
    }    

    @Post('create')
    async create(@Body() orderData: DistanceCls): Promise<any> {
      return this.objService.create(orderData);
    }
}
