import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { Tribe } from './entities/tribe.entity';

@Injectable()
export class TribeService {

  constructor(
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>
  ) {
  }

  async create(createTribeDto: CreateTribeDto) {
    try {
      
      const tribe =  this.tribeRepository.create(createTribeDto);
      await this.tribeRepository.save(tribe);

      return tribe;
      
    } catch (error) {

      throw new BadRequestException(error)
      
    }
  }

  // findAll() {
  //   return `This action returns all tribe`;
  // }

  findOne(id: number) {

  }

  // update(id: number, updateTribeDto: UpdateTribeDto) {
  //   return `This action updates a #${id} tribe`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tribe`;
  // }
}
