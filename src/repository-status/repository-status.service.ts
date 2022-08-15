import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRepositoryStatusDto } from './dto/create-repository-status.dto';
import { UpdateRepositoryStatusDto } from './dto/update-repository-status.dto';
import { RepositoryStatus } from './entities/repository-status.entity';

@Injectable()
export class RepositoryStatusService {
  DATA: RepositoryStatus[] = [
    {
      id: 1,
      state: 604,
      name: "Verificado"
    },
    {
      id: 2,
      state: 605,
      name : "En Espera"
    },
    {
      id: 3,
      state: 606,
      name : "Aprobado"
    },
  ]
  constructor(
    @InjectRepository(RepositoryStatus)
    private readonly statusRepository: Repository<RepositoryStatus>,   
  ) {
  }

  create(createRepositoryStatusDto: CreateRepositoryStatusDto) {
    return 'This action adds a new repositoryStatus';
  }

  findAll() {
    let response: RepositoryStatus[] = this.DATA;

    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} repositoryStatus`;
  }

  update(id: number, updateRepositoryStatusDto: UpdateRepositoryStatusDto) {
    return `This action updates a #${id} repositoryStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} repositoryStatus`;
  }
}
