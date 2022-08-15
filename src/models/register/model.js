const { fetch } = require("../../utils/pg");

const CREATE_USER = `INSERT INTO users
                            (
                                user_firstname,
                                user_lastname,
                                username,
                                user_password,
                                role_id
                            ) VALUES ($1, $2, $3, $4, $5)
                            RETURNING
                              id,
                              user_firstname AS first_name,
                              user_lastname AS last_name;
`;

const createUser = (...values) => fetch(CREATE_USER, values);

module.exports = { createUser };
