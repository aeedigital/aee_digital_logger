import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoggsService } from './loggs.service';
import { CreateLoggDto } from './dto/createLogg.dto';

@Controller('loggs')
export class LoggsController {
  constructor(private readonly loggsService: LoggsService) {}

  @Post()
  create(@Body() body: CreateLoggDto) {
    console.log(body);
    return this.loggsService.create(body);
  }

  @Get()
  getInfo() {
    return 'Olá Mundo';
  }
}
