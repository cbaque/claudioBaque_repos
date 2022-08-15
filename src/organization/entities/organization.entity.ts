import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {

    @PrimaryGeneratedColumn('identity')
    id_organization: number;

    @Column('char', { length: 50, nullable: false })
    name: string

    @Column('int', { nullable: false, default: 1 })
    status: number
}
