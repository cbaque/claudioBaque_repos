import { Repository } from "src/repository/entities/repository.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {

    @PrimaryGeneratedColumn('identity')  
    @ManyToOne(() => Repository, (repos) => repos.id_repository)
    id_repository: number;

    @Column('float', { nullable: false })
    coverage: Double

    @Column('int', { nullable: false })
    bugs: number   
    
    @Column('int', { nullable: false })
    vulnerabilities: number    
    
    @Column('int', { nullable: false })
    hotspot: number      
    
    @Column('int', { nullable: false })
    code_smells: number      
}
