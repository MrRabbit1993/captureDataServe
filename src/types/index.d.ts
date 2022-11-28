import "koa";
import { Logger } from 'koa-log4';
import LRUCache from 'lru-cache';
import type { Client } from 'minio';
import { Connection } from "typeorm";


declare module "koa" {
    interface DefaultContext {
      minioClient:Client;
      orm: Connection;
      user: AuthUserInfoResponse | null | undefined;
      authCache: LRUCache<string,AuthUserInfoResponse> | null;
      token: string | '';
      logger: Logger;
      success: (data:any, message?: string, code?: number) => void;
      fail: (message?: string, errorCode?: number, code?: number) => void;
    }
    interface BaseRequest {
      _logging: boolean;
    }
    interface BaseResponse {
      responseTime: number;
    }
}
export interface ICustomAppState {
}
export interface ICustomAppContext {
  minioClient:Client,
  orm: Connection,
  user: AuthUserInfoResponse | null,
  authCache: LRUCache<string,AuthUserInfoResponse> | null,
  token: string | '',
  logger: Logger,
}

export type QueryObjComment = {
  limit?: number;
  page?: number;
  postId?: number;
}

export type QueryObj = {
  limit?: number;
  page?: number;
}

export type SearchQueryObj = {
  limit?: number;
  page?: number;
  mode?: 'or' | 'and';
  keys?: string;
  type?: string;
  [key: string]: string | number | undefined;
}




