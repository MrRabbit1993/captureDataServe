
import { Repository } from "typeorm"
import { User } from "./../models/User"
import { AppDataSource } from "../core/dataSource"
import { UserParams } from "./../types/user"
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
    const user = new User()
    user.userName = user_name
    user.userNo = user_no
    user.status = 1
    user.userId = 1
    return await repo.save(user)
  }
  static async updateUser(body: UserParams) {
    const repo = UserServe.getRepository()
    const { user_name, id } = body
    const instance = await repo.findOneBy({ userId: id })
    if (!instance) {
      throw new HttpException('实例不存在', 404, 404)
    }
    instance.userName = user_name
    return await repo.save(instance)
  }
}
export default UserServe