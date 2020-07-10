import { Module } from '@nestjs/common';
import { DistanceService } from './distance/distance.service';
import { DistanceController } from './distance/distance.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DistanceCls } from './distance.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([DistanceCls]),
    ],
  providers: [DistanceService],
  controllers: [DistanceController]
})
export class DistanceModule {}
