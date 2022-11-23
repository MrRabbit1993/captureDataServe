const { HttpException } = require("./../core/http-exception");

const catError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (global.config.environment === 'dev') { //配置开发环境错误信息
      throw error
    }
    if (error instanceof HttpException) {//已知异常
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.status
    } else {//未知异常
      ctx.body = {
        msg: "发生未知错误",
        errorCode: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
  export default catError