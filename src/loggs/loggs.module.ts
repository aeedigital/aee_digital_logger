import { Module } from '@nestjs/common';
import { LoggsService } from './loggs.service';
import { LoggsController } from './loggs.controller';

@Module({
  controllers: [LoggsController],
  providers: [LoggsService],
})
export class LoggsModule {}
