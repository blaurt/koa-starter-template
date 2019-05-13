const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require('koa-cors');
const HttpStatus = require("http-status");

const app = new Koa();

//These are the new change
const static_pages = new Koa();
const path = __dirname + "/../book-frontend/build"
console.log('path: ', path);
static_pages.use(serve(path)); //serve the build directory
app.use(mount("/", static_pages));

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/book",async (ctx,next)=>{
  const books = ["Speaking javascript", "Fluent Python", "Pro Python", "The Go programming language"];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());


app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});