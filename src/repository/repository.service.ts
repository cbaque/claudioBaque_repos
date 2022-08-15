import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repository as RepoEntity } from './entities/repository.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepositoryService {
  
  constructor(
    @InjectRepository(RepoEntity)
    private readonly repoRepository: Repository<RepoEntity>
  ) {
  }

  async create(createRepositoryDto: CreateRepositoryDto) {
    try {
      
      const repos =  this.repoRepository.create(createRepositoryDto);
      await this.repoRepository.save(repos);

      return repos;
      
    } catch (error) {

      throw new BadRequestException(error)
      
    }
  }

  findAll() {
    return `This action returns all repository`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
