import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repository as RepoEntity } from './entities/repository.entity';
import { createQueryBuilder, LessThanOrEqual, MoreThanOrEqual, Repository, MoreThan, Raw } from 'typeorm';
import { Metric } from 'src/metrics/entities/metric.entity';
import { ResponseRepos } from './entities/responseRepos.entity';
import { Tribe } from 'src/tribe/entities/tribe.entity';
import * as rawbody from 'raw-body';


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

    const data = await this.seedDataMetrica( id_tribe );
    return data;
  }


  async genarateCSV(id_tribe: number) {

    const data = await this.seedDataMetrica( id_tribe );
    

    let dataString = data.map( res => { 
      return  res.id + ';' +
              res.name + ';' +
              res.tribe + ';' +
              res.organization + ';' +
              res.coverage + ';' +
              res.bugs + ';' +
              res.vulnerabilities +';'+
              res.hotspots + ';' +
              res.codeSmells + ';' +
              res.state
    })
    .join(';\n');

    let cabecera : string = 'id;name;tribe;organization;coverage;bugs;vulnerabilities;hotspots;codeSmells;state;\n';
    return cabecera.concat(dataString);
  }


  async seedDataMetrica(id_tribe: number) {

    const tribe = await this.tribeRepository.findOneBy({id_tribe});

    if ( !tribe )
      throw new NotFoundException('La Tribu no se encuentra registrada')

    const data = await this.metricRepository.find({
      relations: {
        repos: {
          tribe: {
            organization: true
          }
        }
      },
      where: {
        repos: {
          tribe: { id_tribe },
          create_time: Raw((alias) => `${alias} >= :date`, { date: new Date() }),
          state: 'E'
        },
        coverage: MoreThan(75),
      }
    });

    if ( !data.length )
      throw new NotFoundException('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');  


    let response: ResponseRepos[] = [];

    data.forEach( (res: any ) => {
      response.push(
        {
          id: res.repos.id_repository,
          name: String(res.repos.name).trim(),
          tribe: String(res.repos.tribe.name).trim(),
          organization: String(res.repos.tribe.organization.name).trim(),
          coverage: res.coverage + '%',
          bugs: +res.bugs,
          vulnerabilities: +res.vulnerabilities,
          hotspots: +res.hotspot,
          codeSmells: +res.code_smells,
          state: res.repos.state
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
