import { Test, TestingModule } from '@nestjs/testing';
import { CoController } from './co.controller';

describe('Co Controller', () => {
  let controller: CoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoController],
    }).compile();

    controller = module.get<CoController>(CoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
