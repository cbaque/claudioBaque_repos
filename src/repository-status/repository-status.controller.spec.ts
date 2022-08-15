import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryStatusController } from './repository-status.controller';
import { RepositoryStatusService } from './repository-status.service';

describe('RepositoryStatusController', () => {
  let controller: RepositoryStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryStatusController],
      providers: [RepositoryStatusService],
    }).compile();

    controller = module.get<RepositoryStatusController>(RepositoryStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
