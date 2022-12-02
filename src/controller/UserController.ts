import Koa from "koa"
import Router from "koa-router"
import { APIPrefix } from "./../config"
import UserServe from "../services/UserService"
import { UserParams } from "./../types/User"
const userController = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `${APIPrefix}/v1/user` })
userController.post('/add', async (ctx) => {
  await UserServe.addUser(ctx.request.body as UserParams)
  ctx.success(null, "新增成功")
})
userController.post('/update', async (ctx) => {
  await UserServe.updateUser(ctx.request.body as UserParams)
  ctx.success(null, "更新成功")
})
userController.post('/query', async (ctx) => {
  const data = await UserServe.queryUser(ctx.request.body as UserParams)
  ctx.success(data)
})
userController.get('/del', async (ctx) => {
  const { id } = ctx.request.query
  await UserServe.delUser(Number(id))
  ctx.success(null, "删除成功")
})

module.exports = userController