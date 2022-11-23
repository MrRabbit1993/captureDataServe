## PostgreSQL
帮助文档 http://www.postgres.cn/docs/9.6/index.html


## TypeORM

* 模型定义
 https://github.com/typeorm/typeorm/blob/master/docs/zh_CN/entities.md

* 查询参数
 https://www.bookstack.cn/read/TypeORM-0.2.20-zh/find-options.md

* 查询设计器
 https://github.com/typeorm/typeorm/blob/master/docs/zh_CN/select-query-builder.md

* 实例方法
 https://github.com/typeorm/typeorm/blob/master/docs/zh_CN/entity-manager-api.md

* 数据库连接接口
 https://github.com/typeorm/typeorm/blob/master/docs/zh_CN/connection-api.md

* 监听器
 https://typeorm.bootcss.com/listeners-and-subscribers#beforeupdate

 https://github.com/typeorm/typeorm/blob/master/sample/sample7-pagination/app.ts

 ## TypeScript
 https://typescript.bootcss.com/declaration-files/do-s-and-don-ts.html

 https://basarat.gitbook.io/typescript/project/modules/globals

 ## KoaJs
 ### middleware
 https://github.com/koajs/koa/wiki

 ## Minio

 https://docs.min.io/docs/javascript-client-quickstart-guide.html

 https://github.com/minio/minio-js-store-app/blob/master/minio-store.js


## Got
https://github.com/sindresorhus/got

```js
import got from 'got';

try {
	const response = await got('https://sindresorhus.com');
	console.log(response.body);
	//=> '<!doctype html> ...'
} catch (error) {
	console.log(error.response.body);
	//=> 'Internal server error ...'
}
```



# node-postgres
https://node-postgres.com/guides/async-express