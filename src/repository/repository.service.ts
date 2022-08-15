import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repository as RepoEntity } from './entities/repository.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { Metric } from 'src/metrics/entities/metric.entity';
import { ResponseRepos } from './entities/responseRepos.entity';
import { Tribe } from 'src/tribe/entities/tribe.entity';
import { equal } from 'assert';
import { findIndex } from 'rxjs';

@Injectable()
export class RepositoryService {
  
  constructor(
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,

    @InjectRepository(RepoEntity)
    private readonly repoRepository: Repository<RepoEntity>,

    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,    
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

  async findOne(id_tribe: number) {

    const tribe = await this.tribeRepository.findOneBy({id_tribe});

    if ( !tribe )
      throw new NotFoundException('La Tribu no se encuentra registrada')


    // const data = await this.metricRepository.find({
    //   relations: ['id_repository', 'id_repository.id_tribe', 'id_repository.id_tribe.id_organization']
    // })

    const data = await this.repoRepository.find({
      relations: {
        tribe: {
          organization: true
        }
      },
      where: {
        tribe : { id_tribe }
      }
    });


    return data;

    // let response: ResponseRepos[] = [];

    // data.forEach( (res: any ) => {
    //   response.push(
    //     {
    //       id: res.id_repository.id_repository,
    //       name: String(res.id_repository.name).trim(),
    //       tribe: String(res.id_repository.id_tribe.name).trim(),
    //       organization: String(res.id_repository.id_tribe.id_organization.name).trim(),
    //       coverage: res.coverage + '%',
    //       bugs: +res.bugs,
    //       vulnerabilities: +res.vulnerabilities,
    //       hotspots: +res.hotspot,
    //       codeSmells: +res.code_smells,
    //       state: res.id_repository.state
    //     }
    //   );
    // })
    // return response;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }


}
