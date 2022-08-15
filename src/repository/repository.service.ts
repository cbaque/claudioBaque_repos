import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repository as RepoEntity } from './entities/repository.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { Metric } from 'src/metrics/entities/metric.entity';
import { ResponseRepos } from './entities/responseRepos.entity';

@Injectable()
export class RepositoryService {
  
  constructor(
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,

    @InjectRepository(RepoEntity)
    private readonly repoRepository: Repository<RepoEntity>,
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

  async findOne(id: number) {
    const data = await this.metricRepository.find({
      relations: ['id_repository', 'id_repository.id_tribe', 'id_repository.id_tribe.id_organization']
    })

    let response: ResponseRepos[] = [];

    data.forEach( (res: any ) => {
      response.push(
        {
          id: res.id_repository.id_repository,
          name: String(res.id_repository.name).trim(),
          tribe: String(res.id_repository.id_tribe.name).trim(),
          organization: String(res.id_repository.id_tribe.id_organization.name).trim(),
          coverage: res.coverage,
          bugs: res.bugs,
          vulnerabilities: res.vulnerabilities,
          hotspots: res.hotspot,
          codeSmells: res.code_smells,
        }
      );
    })
    return response;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }


}
