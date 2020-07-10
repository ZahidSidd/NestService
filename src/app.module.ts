import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCls } from './store/store.entity';
import { DistanceCls } from './distance/distance.entity';
import { OrderCls } from './order/order.entity';
import { StoreModule } from './store/store.module';
import { DistanceModule } from './distance/distance.module';
import { SohOnlineCls } from './soh-online/sohOnline.entity';
//import { SohOnlineModule } from './soh-online/soh-online.module';
import { CoModule } from './co/co.module';

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres.cmxeqn66fvrs.ap-southeast-2.rds.amazonaws.com',
      port: 5432,
      username: 'superuser',
      password: 'qanithus1',
      database: 'postgres',
      entities: [OrderCls, StoreCls, DistanceCls, SohOnlineCls],
      synchronize: true,
      logging: true,
    }),
    StoreModule,
    SohOnlineCls,
    DistanceModule,
    CoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
