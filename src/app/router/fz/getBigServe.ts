import Router from "koa-router"
import got from 'got'
import path from "path"
// import { fuzhou,source } from "./../../../config/index"
import { writeFileSync } from "../../../file"
const router = new Router();
// const { protocol, host, prot, productUrl } = fuzhou
// 获取驾驶舱支撑平台接口
// router.get(`/nodeServe${productUrl}/:id`, async (ctx, next) => {
//   const { id } = ctx.params
//   const response = await got(`${protocol}://${host}:${prot}${productUrl}/${id}`);
//   // const { data } = JSON.parse(response.body)
//   const filePath = path.join(source, `./../json/${id}.json`)
//   writeFileSync(filePath, response.body)
//   ctx.body = {code:0,success:true}
// })
module.exports = router