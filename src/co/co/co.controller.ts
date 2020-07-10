import { Controller, Get } from '@nestjs/common';
import { Request } from '../co.entity'
import { CoService } from './co.service';

import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('co')
export class CoController {
    constructor(private coService: CoService){}

    @Post('co')
    async co(@Body() requestVM: Request): Promise<any> {
      return this.coService.co(requestVM);
      //return "dfff";
      //return cartVM;  //.userData.postCode; // cartVM.userData.postCode;
    } 

    // @Post('create')
    // async create(@Body() objData: StoreCls): Promise<any> {
    //   return this.coService.create(objData);
    // }
}