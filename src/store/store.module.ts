import { Module } from '@nestjs/common';
import { StoreService } from './store/store.service';
import { StoreController } from './store/store.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCls } from './store.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([StoreCls]),
    ],
  providers: [StoreService],
  controllers: [StoreController]
})
export class StoreModule {}




