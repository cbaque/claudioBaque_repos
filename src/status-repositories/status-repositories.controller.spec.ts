import { Test, TestingModule } from '@nestjs/testing';
import { StatusRepositoriesController } from './status-repositories.controller';
import { StatusRepositoriesService } from './status-repositories.service';

describe('StatusRepositoriesController', () => {
  let controller: StatusRepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusRepositoriesController],
      providers: [StatusRepositoriesService],
    }).compile();

    controller = module.get<StatusRepositoriesController>(StatusRepositoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
