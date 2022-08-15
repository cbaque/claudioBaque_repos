import { Tribe } from "src/tribe/entities/tribe.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Repository {
    @PrimaryGeneratedColumn('identity')
    id_repository: number;

    @Column('int')
    @ManyToOne(() => Tribe, (id) => id.id_tribe)
    @JoinColumn({name: "id_tribe"})
    id_tribe: number    

    @Column('char', { length: 50, nullable: false })
    name: string    

    @Column('char', { length: 1, nullable: false })
    state: string
    
    @CreateDateColumn()
    create_time: Date   
    
    @Column('char', { length: 1, nullable: false, default: 'A' })
    status: string    
}
