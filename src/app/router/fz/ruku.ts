import Router from "koa-router"
import path from "path"
import MysqlConnection from "./../../../config/mysql"
import { readFileSync } from "../../../file"
import { databaseConfig, fuzhou, source } from "./../../../config/index"
const router = new Router();

router.get("/insert", async (ctx) => {
  const code =5076
  const filePath = path.join(source, `./../readJson/${code}.json`)
  const file = readFileSync(filePath)
  const { data } = JSON.parse(file)
  const records = [
    ['request_code', code],
    ['describe', "测试"],
    ['is_deleted', 0]
  ]
  console.log(records);
  const values = `(${code},${JSON.stringify(data)},测试,0)`
  console.log(values);

  const [rows] = await MysqlConnection.query(`INSERT INTO driving_response(id,request_code,is_deleted) VALUES(0,5076,0)`)
  // const [rows] = await MysqlConnection.query(`INSERT INTO driving_response(request_code,json, describe,  is_deleted) VALUES ${values}`,)
  // const [rows] = await MysqlConnection.query(`INSERT INTO driving_response(request_code, describe,  is_deleted) VALUES ?`, [records])
  ctx.body = { code: 0 }
})
router.get("/update", async (ctx) => {
  const code = 5076
  const filePath = path.join(source, `./../readJson/${code}.json`)
  const file = readFileSync(filePath)
  const { data } = JSON.parse(file)
  // const values = `(${code},${JSON.stringify(data)},测试,0)`
  // console.log(values);
  // // 全市作业达标情况EChart图表数据
  const _date = new Date()
  console.log(`update driving_response driving_response set json=${JSON.stringify(data)} where request_code=${code}`);

  await MysqlConnection.query(`update driving_response driving_response set json=${JSON.stringify(data)} where request_code=${code}`,)
  // UPDATE students SET marks = 84 WHERE marks = 74
  // const [rows] = await MysqlConnection.query(`INSERT INTO driving_response(request_code,json, describe,  is_deleted) VALUES ${values}`,)
  // const [rows] = await MysqlConnection.query(`INSERT INTO driving_response(request_code, describe,  is_deleted) VALUES ?`, [records])
  ctx.body = { code: _date }
})
module.exports = router