import { Test, TestingModule } from '@nestjs/testing';
import { AssingmentController } from './assingment.controller';
import { AssingmentService } from './assingment.service';

describe('AssingmentController', () => {
  let controller: AssingmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssingmentController],
      providers: [AssingmentService],
    }).compile();

    controller = module.get<AssingmentController>(AssingmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
