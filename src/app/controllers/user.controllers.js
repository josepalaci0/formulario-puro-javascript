const bcrypt = require('bcrypt');

// Utils
const { catchAsync } = require('../util/catchAsync');




//create users
exports.login = catchAsync( async (req, res, next)=>{
    
    
});
exports.register = catchAsync( async (req, res, next)=>{
    
});
exports.getusers= catchAsync( async (req, res, next)=>{
    res.send({ ok: false, message: 'Data is invalid' });
});

