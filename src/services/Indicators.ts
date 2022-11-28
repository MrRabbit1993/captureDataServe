import { Indicator } from "./../models/Indicator"
import { AppDataSource } from "../core/dataSource"
export async function getIndicatorByCode(code: number | string) {
  const repo = AppDataSource.getRepository(Indicator)
  const response = await repo.createQueryBuilder('indicator').where("indicator.code=:code", {code}).getOne()
  return response
}