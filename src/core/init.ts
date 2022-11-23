import Koa from 'koa'
import Router from "koa-router"
import requireDirectory from "require-directory"


const whenLoadModule = (obj:Router) => {
  if (obj instanceof Router) {
    InitManager.app.use(obj.routes())
  }
}

class InitManager {//初始化管理器
  static app:Koa
  static initCore(app:Koa) {//入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();//调取静态方法
    InitManager.loadHttpException();//调取静态方法(引入错误异常类)
    InitManager.loadConfig();//调取静态方法(引入配置文件)
  }

  static loadConfig(path = "") {
    // const configPath = path || `${process.cwd()}/src/config/config.js`;
    // const config = require(configPath);
    // global.config = config;
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/src/router`;//process.cwd() 得到根目录
    requireDirectory(module, apiDirectory, { visit: whenLoadModule });
  }

  static loadHttpException() {
    const errors = require("./http-exception");
    // global.errs = errors;
  }
}

export default InitManager