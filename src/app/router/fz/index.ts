import Router from "koa-router"
import got from 'got';
import path from "path"
// import { fuzhou } from "./../../../config/index"
// import MysqlConnection  from "./../../../config/mysql"
const router = new Router();
// const { protocol, host, prot, productUrl, nginxPort } = fuzhou



router.get("/getSql", async (ctx) => {
  // const [rows] = await MysqlConnection.query("select * from driving_response")
  // ctx.body = { code: rows }
})
module.exports = router