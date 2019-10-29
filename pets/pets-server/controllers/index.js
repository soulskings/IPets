const CircularJSON = require('circular-json');
const qs = require('qs');

// 运营数据
var fn_operationdata = async (ctx, next) => {
    const body = await CircularJSON.stringify(data.data.data)
    ctx.response.body = body
};

module.exports = {
    'POST /node/operationdata': fn_operationdata
};
