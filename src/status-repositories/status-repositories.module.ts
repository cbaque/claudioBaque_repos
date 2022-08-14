import { Module } from '@nestjs/common';
import { StatusRepositoriesService } from './status-repositories.service';
import { StatusRepositoriesController } from './status-repositories.controller';

@Module({
  controllers: [StatusRepositoriesController],
  providers: [StatusRepositoriesService]
})
export class StatusRepositoriesModule {}
