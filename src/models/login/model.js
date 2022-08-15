const { fetch } = require("../../utils/pg");

const FIND_USER = `
    SELECT 
      id,
      user_password AS password
    FROM users WHERE username = $1`;

const findUser = (...values) => fetch(FIND_USER, values);

module.exports = { findUser };
