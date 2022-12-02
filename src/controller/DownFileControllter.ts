import Koa from "koa"
import Router from "koa-router"
import got from "got"
import path from "path"
import { writeFileSync, readFileSync, readDirSync } from "../file"
import { fuzhou, srcPath } from "../config"
import IndicatorServe from "../services/IndicatorsService"
const { protocol, prot, nginxPort, productUrl, host } = fuzhou

const filePath = (code: number | string) => path.join(srcPath, `./../json/${code}.json`)
const downFile = new Router<Koa.DefaultState, Koa.DefaultContext>({ prefix: `/nodeServe` })
downFile.get('/driving/entrance/api/templateData/:code', async (ctx) => {
  const { code } = ctx.params
  const response = await got(`${protocol}://${host}:${nginxPort}/driving${productUrl}/${code}`)
  writeFileSync(filePath(code), response.body)
  ctx.success((`${protocol}://${host}:${nginxPort}/driving${productUrl}/${code}`), "新增成功")
})
downFile.get('/entrance/api/templateData/:code', async (ctx) => {
  const { code } = ctx.params
  const response = await got(`${protocol}://${host}:${prot}${productUrl}/${code}`);
  writeFileSync(filePath(code), response.body)
  ctx.success(`${protocol}://${host}:${prot}${productUrl}/${code}`, "新增成功")
})
downFile.get('/readFile/:file', async (ctx) => {
  const { file } = ctx.params
  const _path = path.join(srcPath, `./../readJson/${file}`)
  const _dirPath = readDirSync(_path)
  _dirPath.forEach(item => {
    const file_name = item.replace(/(.*\/)*([^.]+).*/ig, "$2");
    const dataInfoString = readFileSync(`${_path}/${item}`)
    const { data } = JSON.parse(dataInfoString)
    const params = {
      code: Number(file_name),
      description: "demo",
      json: JSON.stringify(data)
    }
    IndicatorServe.addIndicator(params)
  })
})

module.exports = downFile