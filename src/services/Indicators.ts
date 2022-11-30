import { Repository } from "typeorm"
import { Indicator } from "./../models/Indicator"
import { AppDataSource } from "../core/dataSource"
class IndicatorServe {
  static repo: Repository<Indicator>
  static getRepository() {
    if (IndicatorServe.repo) {
      return IndicatorServe.repo
    }
    IndicatorServe.repo =AppDataSource.getRepository(Indicator)
    return IndicatorServe.repo
  }
  static async getIndicatorByCode(code: number | string) {
    const repo = IndicatorServe.getRepository()
    const response = await repo.createQueryBuilder('indicator').where("indicator.code=:code", { code }).getOne()
    return response
  }
}
export default IndicatorServe