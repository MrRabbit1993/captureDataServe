console.log("主页启动");
import Koa from 'koa';
import bodyParser from 'koa-bodyparser'; //解决post请求的参数

import InitManager from "./core/init"

// import catError from "./middlewares/exception"//异常中间件

const app = new Koa();

// app.use(catError)
app.use(bodyParser())

InitManager.initCore(app);

app.listen(3000);