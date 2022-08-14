import { Column, Double, PrimaryGeneratedColumn } from "typeorm";

export class Metric {
    @PrimaryGeneratedColumn('identity')
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
