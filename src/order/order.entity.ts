import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class OrderCls {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    shipTo: string;
}