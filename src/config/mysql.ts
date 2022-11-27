import { createPool } from "mysql2"
import { databaseConfig } from "./index"
const { dbName, host, port, user, password } = databaseConfig
const MysqlConnection = createPool({
  host,
  user,
  password,
  database: dbName,
  charset: 'utf8',
})
export default MysqlConnection.promise()