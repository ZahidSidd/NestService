import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Request {
    public userData: UserDataVM;
    public reqItems: reqItemVM[];    
}

@Entity()
export class UserDataVM {
    @Column()
    public postCode: string;    
}

@Entity()
export class reqItemVM {
    @Column()
    public keyCode: string;    

    @Column()
    public reqQty: number;  
}

@Entity()
export class Response {
    public userData: UserDataVM;
    public resLocations: ResLocationVM[];    
}

@Entity()
export class ResLocationVM {
    @Column()
    public storeNo: string;   

    @Column()
    public storeName: string;

    @Column()
    public resItem: ResItemVM[];  
}

@Entity()
export class ResItemVM {
    @Column()
    public keyCode: string;    

    @Column()
    public reqQty: number;  

    @Column()
    public allocQty: number; 
}