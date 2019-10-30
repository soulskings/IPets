/**
 * Created by wupeng on 2019/10/30.
 */
const env = require('./config/env')
console.log(env.base);
require('./func/crawler' + env.base);