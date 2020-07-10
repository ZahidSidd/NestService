import { Controller, Get } from '@nestjs/common';
import { StoreCls } from '../store.entity'
import { StoreService } from './store.service';

import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('store')
export class StoreController {
    constructor(private objService: StoreService){}

    @Get()
    index(): Promise<StoreCls[]> {
      return this.objService.findAll();
    }    

    @Post('create')
    async create(@Body() objData: StoreCls): Promise<any> {
      return this.objService.create(objData);
    }
}

