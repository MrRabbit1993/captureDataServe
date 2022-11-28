type IResponseOptions = {
  type?: string,
  successCode?: number,
  successMessage?: string,
  failCode?: number,
  failMessage?: string,
}
import Koa from 'koa';
import { HttpException } from '../core/http-exception'

export function routerResponse(option: IResponseOptions = {}) {
  return async function (ctx: Koa.DefaultContext, next: Koa.Next) {
    ctx.success = function (data: any, message: string = option.successMessage || '请求成功', code: number = 200) {
      ctx.type = option.type || 'json'
      ctx.status = code;
      ctx.body = {
        code: option.successCode || 0,
        message: message,
        data: data
      }
    }

    ctx.fail = function (message: string = option.failMessage || '请求失败', errorCode: number = option.failCode || 1000, code: number = 400) {
      ctx.type = option.type || 'json'
      throw new HttpException(message, errorCode, code)
    }

    try {
      await next()
    } catch (error) {
      if (error instanceof HttpException) {
        ctx.status = error.code;
        return ctx.body = {
          code: error.errorCode,
          message: error.message,
        }
      } else {
        ctx.status = 500;
        return ctx.body = {
          code: 500,
          message: error.message,
        }
      }
    }
  }

}

