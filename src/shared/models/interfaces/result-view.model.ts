export interface ResultViewModel<T> {
  data: T;
  error: string | unknown;
  status: number;
  message: string;
}
