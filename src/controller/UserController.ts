import Koa from "koa"
import Router from "koa-router"
import { APIPrefix } from "./../config"
import UserServe from "./../services/User"
import { UserParams } from "./../types/user"
const userController = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/user` })
userController.post('/add', async (ctx) => {
  const data = await UserServe.addUser(ctx.request.body as UserParams)
  ctx.success(data)
})
userController.post('/update', async (ctx) => {
  const data = await UserServe.updateUser(ctx.request.body as UserParams)
  ctx.success(data)
})
module.exports = userController