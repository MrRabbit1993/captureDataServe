import Koa from "koa"
import Router from "koa-router"
import { APIPrefix }from "./../config"
const user = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/user` })
user.post('/add', async (ctx) => {
  console.log(ctx.request.body)
  // const { id } = ctx.params
  // console.log("请求参数", id);
  // const data = await getIndicatorByCode(id)
  ctx.body = { code: 0, data:123 }
})
module.exports = user