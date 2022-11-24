import Koa from 'koa'
import Router from "koa-router"
import requireDirectory from "require-directory"
import { source } from "./../config/index"

const loadRouters = (obj: Router) => {
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
    const configPath = path || `${source}/config/index`;
    const config = require(configPath);
    (global as any).config = config;
  }

  static initLoadRouters() {
    const apiDirectory = `${source}/app/router`;
    requireDirectory<Router, Router>(module, apiDirectory, { extensions:["js","ts"],visit: loadRouters  });
  }

  static loadHttpException() {
    const errors = require("./http-exception");
    (global as any).errs = errors;
  }
}

export default InitManager