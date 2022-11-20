import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { errorResponseHelper } from 'src/shared/helpers/error-response.helper';

import { CovidService } from './../services/covid.service';

@ApiTags('COVID API')
@Controller('v1/covid')
export class CovidController {
  constructor(private covidService: CovidService) {}

  @Get()
  getBrazilCovidData() {
    return this.covidService.getBrazilCovidData();
  }

  @Get('/:state')
  getCovidDataPerState(@Param('state') state: string) {
    return this.covidService.getDataPerState(state);
  }

  @Get('data/countries')
  getCountriesData() {
    return this.covidService
      .getDataPerCountry()
      .pipe(catchError(errorResponseHelper));
  }
}
