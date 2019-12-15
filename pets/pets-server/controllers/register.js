const { registerController }  = require('../controllers-modules/register/register.js')
module.exports = {
    'POST /node/register': registerController
};
