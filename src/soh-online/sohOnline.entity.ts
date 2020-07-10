import { Entity, JoinColumn, Unique, PrimaryGeneratedColumn, PrimaryColumn, Column, Index, ManyToOne} from 'typeorm';
import { StoreCls } from '../store/store.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
 
@Entity()
@Index("Index_Unique_SohOnlineCls_keyCode_storeclsid",["keyCode", "storeClsId"], { unique: true })
export class SohOnlineCls {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    keyCode: string;

    @Column()
    storeClsId: string;

    @Column()
    soh: number;

    //@ManyToOne(() => StoreCls, (storeCls) => storeCls.sohOnlineClss)
    //public storeCls: StoreCls;

    @ManyToOne(() => StoreCls, (storeCls) => storeCls.sohOnlineClss)
    public storeCls: StoreCls;

}