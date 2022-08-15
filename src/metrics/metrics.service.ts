import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';

@Injectable()
export class MetricsService {

  constructor(
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>
  ) {
  }


  async create(createMetricDto: CreateMetricDto) {
    try {
      
      const metric =  this.metricRepository.create(createMetricDto);
      await this.metricRepository.save(metric);

      return metric;
      
    } catch (error) {

      throw new BadRequestException(error)
      
    }
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
