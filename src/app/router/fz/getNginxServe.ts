import Router from "koa-router"
import got from 'got';
// import { fuzhou, source } from "./../../../config/index"
import { writeFileSync } from "../../../file"
const router = new Router();
const path = require("path")
// const { protocol, host, prot, productUrl, nginxPort } = fuzhou
// nginx接口
// router.get(`/nodeServe/driving${productUrl}/:id`, async (ctx, next) => {
//   const { id } = ctx.params
//   const response = await got(`${protocol}://${host}:${nginxPort}${productUrl}/${id}`);
//   const filePath = path.join(source, `./../json/${id}.json`)
//   writeFileSync(filePath, response.body)
//   ctx.body = ctx.body = { code: 0, success: true }
// })
module.exports = router