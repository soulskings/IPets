require('babel-core/register');
require('babel-polyfill');


const Koa = require('koa');
const cors = require('koa2-cors');
// const bodyParser = require('koa-bodyparser');
var body = require('koa-body')

const controller = require('./controller');

const app = new Koa();

app.use(cors());

// log request URL:
app.use(async (ctx, next) => {
    
    await next();
    
    console.log(`Process ${ctx.request.method} ${ctx.request.url} ...`);
});


// parse request body:
app.use(body());

// add controllers:
app.use(controller());

app.listen(3001);
console.log('app started at port 3001...');