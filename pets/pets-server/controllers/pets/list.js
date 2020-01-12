const CustomError = require('@utils/error-class.js')
const { template, resCode, message } = require('@api/code')
const List = require('@server/models/pets/list')
const tokenDb = require('../../models/login/replace-token')

/**
 * 宠物列表
 *
 * @param {Number} page
 * @param {Number} count
 * @param {String} cid
 */
const petListController = async (ctx, next) => {
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
        List.find({cid}).sort({pid: -1}).exec((err, res) => {
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

module.exports = petListController