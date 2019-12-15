require('babel-core/register')
require('babel-polyfill')

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

const db = 'mongodb://192.168.8.196:27017/user'

/**
 * mongoose连接数据库
 * @type {[type]}
 */
mongoose.Promise = require('bluebird')
mongoose.connect(db)

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
const models_path = path.join(__dirname, '/models')

/**
 * 已递归的形式，读取models文件夹下的js模型文件，并require
 * @param  {[type]} modelPath [description]
 * @return {[type]}           [description]
 */
var walk = function(modelPath) {
    fs
    .readdirSync(modelPath)
    .forEach(function(file) {
        var filePath = path.join(modelPath, '/' + file)
        var stat = fs.statSync(filePath)

        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
            require(filePath)
            }
        }
        else if (stat.isDirectory()) {
            walk(filePath)
        }
    })
}
walk(models_path)

const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
var body = require('koa-body')

const controller = require('./controller')

const app = new Koa()

app.use(logger())
app.use(cors())
app.use(session(app))
app.use(bodyParser())

// log request URL:
app.use(async (ctx, next) => {
    
    await next()
    
    console.log(`Process ${ctx.request.method} ${ctx.request.url} ...`)
});


// parse request body:
app.use(body())

// add controllers:
app.use(controller())

app.listen(3001)
console.log('app started at port 3001...')