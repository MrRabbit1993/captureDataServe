import Koa from "koa"
import Router from "koa-router"
import { APIPrefix } from "./../config"
import DistrictServe from "../services/DistrictService"
import { IDistrictParams } from "./../types/District"
const district = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/district` })
const JSON = require("./../sys_district.json")
district.post('/add', async (ctx) => {
  // JSON.RECORDS.forEach(async(item:unknown) => {
  await DistrictServe.addDistrict(ctx.request.body as IDistrictParams)
  // })
  ctx.success(null, "新增成功")
})
district.get('/query', async (ctx) => {
  const { depth } = ctx.query
  const _depth = depth as string
  const data = await DistrictServe.queryDistrict({ depth: _depth || 4 })
  ctx.success(data)
})

module.exports = district