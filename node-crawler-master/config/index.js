/**
 * Created by wupeng on 2019/10/30.
 */

const env = require('./env')
console.log(env.base);
const json = {
    list: {
        detail_page_url: String,
        img_url: String,
        name: String,
        avatar: String,
        price_range: String,
        cid: String,
        pid: String
    }
}
module.exports = json[env.base]