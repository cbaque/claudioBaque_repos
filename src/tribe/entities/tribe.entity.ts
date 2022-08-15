import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tribe {

    @PrimaryGeneratedColumn('identity')
    id_tribe: number;

    @OneToOne(() => Organization)
    @JoinColumn()
    @Column('int')
    id_organization: number;

    @Column('char', { length: 50, nullable: false })
    name: string

    @Column('int', { nullable: false })
    status: number


}
