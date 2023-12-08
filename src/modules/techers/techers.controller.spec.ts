import { Test, TestingModule } from '@nestjs/testing';
import { TechersController } from './techers.controller';
import { TechersService } from './techers.service';

describe('TechersController', () => {
  let controller: TechersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechersController],
      providers: [TechersService],
    }).compile();

    controller = module.get<TechersController>(TechersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
