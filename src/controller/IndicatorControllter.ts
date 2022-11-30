import Koa from "koa"
import Router from "koa-router"
import { APIPrefix } from "./../config"
import IndicatorServe from "./../services/Indicators"
import { IndicatorParams } from "./../types/Indicator"
const indicator = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/indicator` })

indicator.post('/add', async (ctx) => {
  await IndicatorServe.addIndicator(ctx.request.body as IndicatorParams)
  ctx.success(null,"新增成功")
})
indicator.get('/query/:code', async (ctx) => {
  const { code } = ctx.params
  const data = await IndicatorServe.queryIndicator(code)
  ctx.success(data)
})
indicator.get('/del', async (ctx) => {
  const { id } = ctx.request.query
  const data = await IndicatorServe.delIndicator(Number(id))
  ctx.success(null, "删除成功")
})
indicator.post('/update', async (ctx) => {
  await IndicatorServe.updateIndicator(ctx.request.body as IndicatorParams)
  ctx.success(null, "更新成功")
})

module.exports = indicator