
import { Repository } from "typeorm"
import { User } from "../models/UserModel"
import { AppDataSource } from "../core/dataSource"
import { UserParams } from "../types/User"
import { HttpException } from "../core/http-exception";
class UserServe {
  static repo: Repository<User>
  static getRepository() {
    if (UserServe.repo) {
      return UserServe.repo
    }
    UserServe.repo = AppDataSource.getRepository(User)
    return UserServe.repo
  }
  static async addUser(body: UserParams) {
    const repo = UserServe.getRepository()
    const { user_name, user_no } = body
    const total = await repo.count()
    const user = new User()
    user.userName = user_name
    user.userNo = user_no
    user.status = 1
    user.userId = total + 1
    return await repo.save(user)
  }
  static async updateUser(body: UserParams) {
    const repo = UserServe.getRepository()
    const { user_name, id } = body
    const instance = await repo.findOneBy({ id: id})
    if (!instance) {
      throw new HttpException('实例不存在', 404, 200)
    }
    instance.userName = user_name
    return await repo.save(instance)
  }
  static async queryUser(body: UserParams) {
    const { user_name} = body
    const repo = UserServe.getRepository()
    const instance = await repo.findOneBy({ userName: user_name, status: 1 })
    return instance
  }
  static async delUser(id: number) {
    const repo = UserServe.getRepository()
    const instance = await repo.findOneBy({ id, status: 1 })
    if (!instance) {
      throw new HttpException('实例不存在', 404, 200)
    }
    instance.status = -1
    return await repo.save(instance)
  }
}
export default UserServe