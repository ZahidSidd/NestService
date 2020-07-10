import { Module } from '@nestjs/common';
import { CoService } from './co/co.service';
import { CoController } from './co/co.controller';

@Module({
  providers: [CoService],
  controllers: [CoController]
})
export class CoModule {}
