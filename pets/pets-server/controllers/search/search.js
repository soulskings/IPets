const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const List = require('@server/models/pets/list')
const Hot = require('@server/models/pets/hotpet')

/**
 * 热搜
 */
const hotSearch = async (ctx, next) => {
    let data = [];
    const HotPets = {
        '0': ['贵宾犬','泰迪犬','柯基犬','哈士奇','吉娃娃','柴犬','金毛犬'],
        '1': ['布偶猫','折耳猫','英国短毛猫','美国短毛猫','暹罗猫'],
        '2': [],
        '3': []
    }

    await new Promise(resolve => {
        List.find({}).sort({popularity: -1}).exec((err, res) => {
            if(err){
                throw new CustomError({
                    code: resCode.ERROR,
                    data: err,
                    message: ''
                })
            }else{
                let [a, b, c, d] = [[], [], [], []]
                res.forEach(item => {
                    let v = {
                        cid: item.cid,
                        pid: item.pid,
                        name: item.name,
                        popularity: item.popularity
                    } 
                    if(item.cid == 0){
                        a.push(v)
                    }else if(item.cid == 1){
                        b.push(v)
                    }else if(item.cid == 1){
                        c.push(v)
                    }else if(item.cid == 1){
                        d.push(v)
                    }
                })
                data['0'] = a.sort()
                data['1'] = b.sort()
                data['2'] = c.sort()
                data['3'] = d.sort()
                data['0'].length = 7
                data['1'].length = 5
                data['2'].length = 0
                data['3'].length = 0
                resolve()
            }
        })
    })
        
    ctx.body = {
        data,
        code: resCode.SUCCESS,
    }
}


/**
 *  搜索宠物
 *
 * @param {Number} page
 * @param {Number} count
 * @param {String} query
 */
const searchEverything = async (ctx, next) => {
    const {page = 0, count = 20, cid} = ctx.request.body
    if(!cid){
        throw new CustomError({
            code: resCode.ERROR,
            data: {},
            message: 'cid is required'
        })
    }

    let data, total;
    await new Promise(resolve => {
        List.find({query}).sort({pid: -1}).exec((err, res) => {
            if(err){
                throw new CustomError({
                    code: resCode.ERROR,
                    data: err,
                    message: ''
                })
            }else{
                total = res.length;
                data = res.slice(page * count, (page + 1) * count)
                resolve()
            }
        })
    })
        
    ctx.body = {
        data,
        total,
        code: resCode.SUCCESS,
    }
}

module.exports = {
    hotSearch,
    searchEverything
}