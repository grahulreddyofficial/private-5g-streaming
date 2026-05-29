const jwt = require("jsonwebtoken");
require('dotenv').config();

const createToken = (user) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const payload =  {
        mail: user.mail
    };
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secretKey, options);

    return token;
}

module.exports = {
    createToken
}