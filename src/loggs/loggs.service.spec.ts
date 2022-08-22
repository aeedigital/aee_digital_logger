import { Test, TestingModule } from '@nestjs/testing';
import { LoggsService } from './loggs.service';

describe('LoggsService', () => {
  let service: LoggsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggsService],
    }).compile();

    service = module.get<LoggsService>(LoggsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
