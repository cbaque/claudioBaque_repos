import { Module } from '@nestjs/common';
import { RepositoryStatusService } from './repository-status.service';
import { RepositoryStatusController } from './repository-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryStatus } from './entities/repository-status.entity';

@Module({
  controllers: [RepositoryStatusController],
  providers: [RepositoryStatusService],
  imports: [
    TypeOrmModule.forFeature([RepositoryStatus]),
  ]   
})
export class RepositoryStatusModule {}
