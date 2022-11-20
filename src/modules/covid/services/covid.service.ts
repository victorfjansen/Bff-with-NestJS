import { ResultViewModel } from './../../../shared/models/interfaces/result-view.model';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { BaseService } from 'src/shared';

import { CovidAdaptor } from '../adaptors/covid-data.adaptor';
import { DataPerCountryDto, IndividualDataUfDto } from '../models';

@Injectable()
export class CovidService extends BaseService {
  constructor(private httpService: HttpService) {
    super('https://covid19-brazil-api.now.sh/api/report/v1');
  }

  getBrazilCovidData(): Observable<ResultViewModel<IndividualDataUfDto[]>> {
    return this.httpService
      .get(this.getApiUrl())
      .pipe(map((data) => CovidAdaptor.covidList(data?.data?.data)));
  }

  getDataPerState(
    uf: string,
  ): Observable<ResultViewModel<IndividualDataUfDto>> {
    return this.httpService
      .get(this.getApiUrl(`brazil/uf/${uf}`))
      .pipe(map((data) => CovidAdaptor.individualCovidData(data?.data)));
  }

  getDataPerCountry(): Observable<ResultViewModel<DataPerCountryDto[]>> {
    return this.httpService
      .get(this.getApiUrl('countries'))
      .pipe(map((data) => CovidAdaptor.getDataPerCountry(data?.data?.data)));
  }
}
