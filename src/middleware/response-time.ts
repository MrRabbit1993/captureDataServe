import Koa from 'koa';
export function responseTime() {
  return async function (ctx: Koa.DefaultContext, next: Koa.Next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  }
}