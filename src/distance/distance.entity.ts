import { Entity, JoinColumn, Unique, PrimaryGeneratedColumn, PrimaryColumn, Column, Index, ManyToOne} from 'typeorm';
import { StoreCls } from '../store/store.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';

@Entity()
@Index("Index_Unique_DistanceCls_postcode_storeclsid",["postCode", "storeClsId"], { unique: true })
export class DistanceCls {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    postCode: string;

    @Column()
    storeClsId: string;

    @Column()
    distance: number;

    @ManyToOne(() => StoreCls, (storeCls) => storeCls.distanceClss)
    public storeCls: StoreCls;

}