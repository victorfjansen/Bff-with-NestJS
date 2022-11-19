import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { catchError, Observable } from 'rxjs';
import { errorResponseHelper } from 'src/shared/helpers/error-response.helper';
import { DataPerCountryDto, IndividualDataUfDto } from '../models';

import { CovidService } from './../services/covid.service';

@ApiTags('COVID API')
@Controller('v1/covid')
export class CovidController {
  constructor(private covidService: CovidService) {}

  @Get()
  getBrazilCovidData(): Observable<IndividualDataUfDto[]> {
    return this.covidService.getBrazilCovidData();
  }

  @Get('/:state')
  getCovidDataPerState(
    @Param('state') state: string,
  ): Observable<IndividualDataUfDto> {
    return this.covidService.getDataPerState(state);
  }

  @Get('data/countries')
  getCountriesData(): Observable<DataPerCountryDto[]> {
    return this.covidService
      .getDataPerCountry()
      .pipe(catchError(errorResponseHelper));
  }
}
