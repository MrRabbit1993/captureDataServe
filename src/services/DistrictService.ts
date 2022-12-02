


import { Repository } from "typeorm"
import { District } from "../models/DistrictModel"
import { AppDataSource } from "../core/dataSource"
import { IDistrictParams } from "../types/District"
import { HttpException } from "../core/http-exception";
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
    const { district_no, district_name, pid, poltype, order_no, remark } = body
    const district = new District()
    district.districtNo = district_no
    district.districtName = district_name
    district.pid = pid
    district.poltype = poltype
    district.orderNo = order_no
    district.remark = remark
    district.status = 1
    return await repo.save(district)
  }

}
export default DistrictServe