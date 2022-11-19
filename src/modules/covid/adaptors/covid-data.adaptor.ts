import { Injectable } from '@nestjs/common';

import {
  CovidDataCountryViewModel,
  CovidDataUfViewModel,
  IndividualDataUfDto,
} from '../models';
import { DataPerCountryDto } from './../models/dtos/data-per-country.dto';

@Injectable()
export class CovidAdaptor {
  static covidList(covidItem: CovidDataUfViewModel[]): IndividualDataUfDto[] {
    const newArr = [];
    covidItem.forEach((item) => {
      newArr.push({
        uf: item?.uf,
        state: item?.state,
        cases: item?.cases,
        deaths: item?.deaths,
        suspects: item?.suspects,
        datetime: item?.datetime,
      });
    });
    return newArr;
  }

  static individualCovidData(data: CovidDataUfViewModel): IndividualDataUfDto {
    return {
      uf: data?.uf,
      state: data?.state,
      cases: data?.cases,
      deaths: data?.deaths,
      suspects: data?.suspects,
      datetime: data?.datetime,
    };
  }

  static getDataPerCountry(
    data: CovidDataCountryViewModel[],
  ): DataPerCountryDto[] {
    const newArr: DataPerCountryDto[] = [];
    data.forEach((item) => {
      newArr.push({
        country: item?.country,
        cases: item?.cases,
        deaths: item?.deaths,
        recovered: item?.recovered,
        updated_at: item?.updated_at,
      });
    });
    return newArr;
  }
}
