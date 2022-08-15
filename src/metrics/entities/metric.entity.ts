import { Repository } from "src/repository/entities/repository.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {

    @Column('int')
    @PrimaryGeneratedColumn('identity')
    @OneToOne(() => Repository, (id) => id.id_repository)
    @JoinColumn({name: "id_repository"})
    id_repository: number   

    @Column({ type: 'decimal', default: 0 })
    coverage: number

    @Column('int', { nullable: false })
    bugs: number   
    
    @Column('int', { nullable: false })
    vulnerabilities: number    
    
    @Column('int', { nullable: false })
    hotspot: number      
    
    @Column('int', { nullable: false })
    code_smells: number      
}
