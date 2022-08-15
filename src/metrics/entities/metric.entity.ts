import { Repository } from "src/repository/entities/repository.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {

    @PrimaryColumn()
    readonly id_repository: number;

    @OneToOne(() => Repository, (id) => id.id_repository)
    @JoinColumn({name: "id_repository"})
    repos: Repository   

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
