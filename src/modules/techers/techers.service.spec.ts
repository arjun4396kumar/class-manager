import { Test, TestingModule } from '@nestjs/testing';
import { TechersService } from './techers.service';

describe('TechersService', () => {
  let service: TechersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechersService],
    }).compile();

    service = module.get<TechersService>(TechersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
