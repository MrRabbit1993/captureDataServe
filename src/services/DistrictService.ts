


import { Repository } from "typeorm"
import { District } from "../models/DistrictModel"
import { AppDataSource } from "../core/dataSource"
// import { IDistrictParams } from "../types/District"
import { arrToTree } from "./../utils"
class DistrictServe {
  static repo: Repository<District>
  static getRepository() {
    if (DistrictServe.repo) {
      return DistrictServe.repo
    }
    DistrictServe.repo = AppDataSource.getRepository(District)
    return DistrictServe.repo
  }
  static async addDistrict(body: any) {
    const repo = DistrictServe.getRepository()
    const { district_no, district_name, district_id, pid, poltype, order_no, remark } = body
    const district = new District()
    district.districtNo = district_no
    district.districtName = district_name
    district.districtId = district_id
    district.pid = pid
    district.poltype = poltype
    district.orderNo = order_no
    district.remark = remark
    district.status = 1
    return await repo.save(district)
  }
  static async queryDistrict(params: { depth?:string|number }) {
    const { depth } = params
    const repo = DistrictServe.getRepository()
    const instance = await repo.createQueryBuilder("district").where("district.poltype <= :depth", { depth }).getMany()
    const ret = arrToTree(instance as any)
    return ret
  }

}
export default DistrictServe