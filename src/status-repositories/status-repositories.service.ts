import { Injectable } from '@nestjs/common';
import { STATUS_SEED } from 'src/seed/data/status-seed';
import { CreateStatusRepositoryDto } from './dto/create-status-repository.dto';
import { UpdateStatusRepositoryDto } from './dto/update-status-repository.dto';

@Injectable()
export class StatusRepositoriesService {

  findAll() {
    const status = STATUS_SEED.values();

    return status;
  }
}
