import { Organization } from "src/organization/entities/organization.entity";
import { Repository } from "src/repository/entities/repository.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tribe {

    @PrimaryGeneratedColumn('identity')
    id_tribe: number;

    // @Column('int')
    @ManyToOne(() => Organization, (organization) => organization.id_organization)
    @JoinColumn({name: "id_organization"})
    organization: Organization;

    @Column('char', { length: 50, nullable: false })
    name: string

    @Column('int', { nullable: false, default: 1 })
    status: number

    @OneToMany( ()=> Repository, ( repos ) => repos.tribe )
    tribe: Repository;


}
