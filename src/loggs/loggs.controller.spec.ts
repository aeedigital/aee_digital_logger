import { Test, TestingModule } from '@nestjs/testing';
import { LoggsController } from './loggs.controller';
import { LoggsService } from './loggs.service';

describe('LoggsController', () => {
  let controller: LoggsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggsController],
      providers: [LoggsService],
    }).compile();

    controller = module.get<LoggsController>(LoggsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
