/* eslint-disable @typescript-eslint/no-unused-vars */

export type Env = {
  DATABASE_URL: string;
  CORS_ORIGIN: string;
  TOKEN_KEY: string;
};

export type Info = {
  onlyCheck: boolean;
};

export interface Resolver<T, U> {
  (parent: any, params: T, context: any, info: any): Promise<U>;
}

export interface Response<T> {
  result: 'error' | 'warning' | 'success';
  message: string;
  data: T;
}

export type HandleResult<T> = {
  error: Error | null;
  data: T | null;
};

export type JWT = {
  id: number;
  pass: string;
};

export type Status = 'error' | 'warning';

export type ErrorsItem = {
  code: number;
  status: Result;
  message: string;
  stdErrMessage: string;
};

export type Errors = {
  errors: ErrorsItem[];
};