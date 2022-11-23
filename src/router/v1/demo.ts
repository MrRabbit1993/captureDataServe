import Router from "koa-router"
const router = new Router();
debugger
router.get("/v1/a/b", (ctx, next) => {
  ctx.body = { key: "hello koa book" }
})
module.exports = router;