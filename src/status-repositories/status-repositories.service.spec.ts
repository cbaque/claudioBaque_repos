import { Test, TestingModule } from '@nestjs/testing';
import { StatusRepositoriesService } from './status-repositories.service';

describe('StatusRepositoriesService', () => {
  let service: StatusRepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusRepositoriesService],
    }).compile();

    service = module.get<StatusRepositoriesService>(StatusRepositoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
