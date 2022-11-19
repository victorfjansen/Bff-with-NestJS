import { CovidService } from './services/covid.service';
import { CovidController } from './controllers/covid.controller';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [CovidController],
  providers: [CovidService],
})
export class CovidModule {}
