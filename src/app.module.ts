import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggsModule } from './loggs/loggs.module';

@Module({
  imports: [LoggsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
