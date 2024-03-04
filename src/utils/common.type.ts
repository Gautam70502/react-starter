export interface IResponse<T> {
  data?: T;
  status: boolean;
  error?: Error;
}
