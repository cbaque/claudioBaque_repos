import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from './entities/repository.entity';

import { Metric } from 'src/metrics/entities/metric.entity';
import { MetricsModule } from 'src/metrics/metrics.module';
import { Tribe } from 'src/tribe/entities/tribe.entity';

@Module({
  controllers: [RepositoryController],
  providers: [RepositoryService],
  imports: [
    TypeOrmModule.forFeature([Metric, Repository, Tribe]),
  ]  
})
export class RepositoryModule {}
