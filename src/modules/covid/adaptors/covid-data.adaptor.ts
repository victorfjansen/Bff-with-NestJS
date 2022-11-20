import {
  CovidDataCountryViewModel,
  CovidDataUfViewModel,
  IndividualDataUfDto,
} from '../models';
import { ResultViewModel } from './../../../shared/models/interfaces/result-view.model';
import { DataPerCountryDto } from './../models/dtos/data-per-country.dto';

export class CovidAdaptor {
  static covidList(
    covidItem: CovidDataUfViewModel[],
  ): ResultViewModel<IndividualDataUfDto[]> {
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

    return {
      data: newArr,
      error: null,
      message: 'Dados encontrados com sucesso',
      status: 200,
    };
  }

  static individualCovidData(
    data: CovidDataUfViewModel,
  ): ResultViewModel<IndividualDataUfDto> {
    return {
      data: {
        uf: data?.uf,
        state: data?.state,
        cases: data?.cases,
        deaths: data?.deaths,
        suspects: data?.suspects,
        datetime: data?.datetime,
      },
      error: null,
      message: 'Dados encontrados com sucesso',
      status: 200,
    };
  }

  static getDataPerCountry(
    data: CovidDataCountryViewModel[],
  ): ResultViewModel<DataPerCountryDto[]> {
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

    return {
      data: newArr,
      error: null,
      message: 'Dados encontrados com sucesso',
      status: 200,
    };
  }
}
