import { ResultViewModel } from './../models/interfaces/result-view.model';
import { HttpException } from '@nestjs/common';
import { AxiosError } from 'axios';

export const errorResponseHelper = (error: AxiosError) => {
  const errorData = error?.response?.data;

  const resultError: ResultViewModel<null> = {
    data: null,
    error: !errorData ? error : errorData,
    status: error.status,
    message: error?.message,
  };

  throw new HttpException(resultError, error?.response?.status || 500);
};
