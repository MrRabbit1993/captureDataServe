const environment = "dev"
const srcPath = `${process.cwd()}/src` //process.cwd() 得到根目录
const path = require('path')
const APIPrefix = "/api"
const PORT = 3000
const orm = {
  type: "mysql",
  host: 'localhost',
  port: 3306,
  database: 'driving_db',
  username: 'root',
  password: '',
  synchronize: false,
  "entities": [
    path.resolve(__dirname, "./../models/**")
  ],
}
// export const fuzhou = {
//   host: "localhost",
//   protocol: "http",
//   prot: "9009",
//   nginxPort: "9008",
//   productUrl:"/entrance/api/templateData"
// }
export { environment, srcPath, orm, APIPrefix, PORT }