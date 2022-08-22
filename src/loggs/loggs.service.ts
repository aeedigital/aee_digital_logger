import { Injectable } from '@nestjs/common';
import { CreateLoggDto } from './dto/createLogg.dto';
import { Logtail } from '@logtail/node';

const logtail = new Logtail('CEKWNydkTAu9aTcBZ6FbtN7N');

@Injectable()
export class LoggsService {
  create(logg: CreateLoggDto) {
    logtail[logg.level](logg);
    return logg;
  }
}
