const path = require('path')

const orm = {
  "type": "postgres",
  "host": process.env.DB_HOST || "10.162.12.172",
  "port": process.env.DB_PORT || 5434,
  "username": process.env.DB_USER || "page_render",
  "password": process.env.DB_PASSWORD || "page_render@!23",
  "database": process.env.DB_NAME || "page_render",
  "synchronize": process.env.DB_SYNC || false,
  "logging": process.env.DB_LOGGING || false,
  "entities": [
    path.resolve(__dirname, "../src/models/**/*")
  ],
  //   "migrations": [
  //      "src/migration/**/*.ts"
  //   ],
  //   "subscribers": [
  //      "src/subscriber/**/*.ts"
  //   ],
  //   "cli": {
  //      "entitiesDir": "../models",
  //      "migrationsDir": "src/migration",
  //      "subscribersDir": "src/subscriber"
  //   }
}

const minio = {
  endPoint: process.env.MINIO_HOST || '10.162.12.172',
  port: process.env.MINIO_PORT ? parseInt(process.env.MINIO_PORT) : 9000,
  useSSL: process.env.MINIO_SSL === 'true' ? true : false,
  accessKey: process.env.MINIO_ACCESS_KEY || 'minio',
  secretKey: process.env.MINIO_SECRET_KEY || 'minio123321456'
}

// const app = {
//   url: 'http://10.162.8.44:8000/',
//   clientID: '7c85a436f8db4d6e8838330bdd4686ea',
//   clientSecret: '5a507cbe92ae455b8afbf773a997b18b',
// }
// const app = {
//   url: 'http://10.162.8.44:8000/',
//   clientID: '38b9517580574788b9d2d3e6b9ed4991',
//   clientSecret: '1047f4f2de114f86a5d9cf01ef9f35f5',
// }
const app = {
  url: process.env.AUTH_ENTRY || 'http://10.162.8.39:9000/', // url: 'http://ds.citycloud.com.cn:9000/',
  clientID: process.env.AUTH_ID || '1295d3e399684b27a84fa2b3159f8ed8',
  clientSecret: process.env.AUTH_SECRET || '194e6bdef84943548cfa084181605294',
};

const flowable = {
  endPoint: process.env.FLOWABLE_HOST || '10.162.12.172',
  port: process.env.FLOWABLE_PORT ? parseInt(process.env.FLOWABLE_PORT) : 8980,
  username: process.env.FLOWABLE_USERNAME || 'rest-admin',
  password: process.env.FLOWABLE_PASSWORD || 'test'
}

export {
  flowable,
  orm,
  minio,
  app,
}
