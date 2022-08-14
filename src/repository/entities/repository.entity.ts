import { Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class Repository {
    @PrimaryGeneratedColumn('identity')
    id_repository: number;

    @Column('int', { nullable: false })
    id_tribe: number    

    @Column('char', { length: 50, nullable: false })
    name: string    

    @Column('char', { length: 1, nullable: false })
    state: string
    
    @Column('timestamp', {  nullable: false })
    create_time: Timestamp   
    
    @Column('char', { length: 1, nullable: false })
    status: number    
}
