const Account = require('../models/account.model');
const Encryption = require('../_utils/encryption');
const jwt = require('jsonwebtoken');
require('dotenv/config');

exports.create = async (req, res, next) => {
  try {

    let checkEmail = await Account.findOne({
      email: req.body.email
    });

    let password = req.body.password;
    
    let user = new Account({
      ...req.body,
      password: await Encryption.encrypt(req.body.password, next)
    });

    if(checkEmail){
      return res.status(409).json('Email is already exist!');
    }else if(password.length < 6){
      return res.status(409).json('Password is too short!');
    }else{
      await user.save();
      return res.status(200).json('Successfully saved.');
    }
  } catch (error) {
    return next(error);
  }
}; 


exports.read = async (req, res, next) => {
  try {

    const jwtPrivateKey = process.env.JWT_TOKEN;

    const userInfo = await Account.findOne({email: req.body.email});
    if (!userInfo) return next('no email found!');

    const passwordMatch = await Encryption.compare(req.body.password, userInfo.password, next);
    if(!passwordMatch) return next('email or password is not match!');

    const token = jwt.sign({ _id: userInfo._id }, jwtPrivateKey, { expiresIn: '2m' });

    return res.status(200).send({ userInfo, token  });
  } catch (error) {
    return next(error);
  }
};