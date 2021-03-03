const bcrypt = require('bcrypt');

exports.encrypt = async (data, next) => {
  try {
    const hashed = await bcrypt.hash(data, 10);
    return hashed;
  } catch (error) {
    return next(error);
  }
};

exports.compare = async (data, encryptedData, next) => {
  try {
    const result = await bcrypt.compare(data, encryptedData);
    return result;
  } catch (error) {
    return next(error);
  }
};
