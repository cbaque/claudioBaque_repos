import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Tribe {

    @PrimaryGeneratedColumn('identity')
    id_tribe: number;

    @Column('int')
    id_organization: number;

    @Column('char', { length: 50, nullable: false })
    name: string

    @Column('int', { nullable: false })
    status: number


}
