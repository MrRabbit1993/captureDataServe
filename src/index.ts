import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import "reflect-metadata"
import { routerResponse } from './middleware/router-response'
import { responseTime } from './middleware/response-time'
import { AppDataSource } from "./core/dataSource"
import { PORT } from "./config"
import InitManager from "./core/init"



AppDataSource.initialize().then(() => {
  const app = new Koa();
  app.use(routerResponse())
  app.use(responseTime())
  app.use(bodyParser())
  InitManager.initCore(app);
  app.listen(PORT, () => {
    console.log(`listen::: http://localhost:${PORT}`)
  })
}).catch((error) => { console.log("TypeORM connection error: ", error); process.exit(1) });