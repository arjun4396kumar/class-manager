import { Test, TestingModule } from '@nestjs/testing';
import { AssingmentService } from './assingment.service';

describe('AssingmentService', () => {
  let service: AssingmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssingmentService],
    }).compile();

    service = module.get<AssingmentService>(AssingmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
