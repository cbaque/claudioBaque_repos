import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryStatusService } from './repository-status.service';

describe('RepositoryStatusService', () => {
  let service: RepositoryStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryStatusService],
    }).compile();

    service = module.get<RepositoryStatusService>(RepositoryStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
