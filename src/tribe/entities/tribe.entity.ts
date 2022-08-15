import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tribe {

    @PrimaryGeneratedColumn('identity')
    id_tribe: number;

    @Column('int')
    @ManyToOne(() => Organization, (id) => id.id_organization)
    @JoinColumn({name: "id_organization"})
    id_organization: number;

    @Column('char', { length: 50, nullable: false })
    name: string

    @Column('int', { nullable: false, default: 1 })
    status: number


}
