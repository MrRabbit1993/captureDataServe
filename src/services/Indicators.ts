import { Repository } from "typeorm"
import { Indicator } from "../models/IndicatorModel"
import { AppDataSource } from "../core/dataSource"
import { IndicatorParams } from "./../types/Indicator"
import { HttpException } from "../core/http-exception";
class IndicatorServe {
  static repo: Repository<Indicator>
  static getRepository() {
    if (IndicatorServe.repo) {
      return IndicatorServe.repo
    }
    IndicatorServe.repo = AppDataSource.getRepository(Indicator)
    return IndicatorServe.repo
  }
  static async addIndicator(body: IndicatorParams) {
    const repo = IndicatorServe.getRepository()
    const { json, code, description } = body
    const instance = new Indicator()
    instance.code = code
    instance.json = JSON.stringify(json)
    instance.description = description
    instance.status = 1
    return await repo.save(instance)
  }
  static async queryIndicator(code: number | string) {
    const repo = IndicatorServe.getRepository()
    const response = await repo.createQueryBuilder('indicator').where("indicator.code=:code and indicator.status=:status", { code, status:1 }).getOne()
    return response
  }
  static async updateIndicator(body: IndicatorParams) {
    const repo = IndicatorServe.getRepository()
    const { json, code, description } = body
    console.log(body);

    const instance = await repo.findOneBy({ code })
    if (!instance) {
      throw new HttpException('实例不存在', 404, 200)
    }
    instance.json = JSON.stringify(json)
    instance.description = description
    return await repo.save(instance)
  }
  static async delIndicator(id:number) {
    const repo = IndicatorServe.getRepository()
    const instance = await repo.createQueryBuilder("indicator").where("indicator.code=:code and indicator.status=:status", { code:id, status: 1 }).getOne()
    if (!instance) {
      throw new HttpException('实例不存在', 404, 200)
    }
    instance.status = -1
    return await repo.save(instance)
  }

}
export default IndicatorServe