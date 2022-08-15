import { Column } from "typeorm";

export class RepositoryStatus {

    @Column('int')
    id?: number;

    @Column('int')
    state?: number;

    @Column('char', { length: 50 })
    name?: string;
}
