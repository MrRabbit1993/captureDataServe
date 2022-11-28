import Koa from "koa"
import Router from "koa-router"
import { APIPrefix } from "./../config"
import { getIndicatorByCode } from "./../services/Indicators"
const indicator = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/indicator` })
//根据code获取指标
indicator.get('/getCode/:id', async (ctx) => {
  const { id } = ctx.params
  const data = await getIndicatorByCode(id)
  ctx.success(data)
})
module.exports = indicator