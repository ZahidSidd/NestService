import { Entity, Column, Unique, Index, OneToMany, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';
import { DistanceCls } from '../distance/distance.entity';
import { SohOnlineCls } from '../soh-online/sohOnline.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';

@Entity()
export class StoreCls {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    FF: boolean;

    @Column()
    CC: boolean;
    
    @OneToMany(() => DistanceCls, (distanceCls) => distanceCls.storeCls)
    public distanceClss: DistanceCls[];

    @OneToMany(() => SohOnlineCls, (sohOnlineCls) => sohOnlineCls.storeCls)
    public sohOnlineClss: SohOnlineCls[];
}