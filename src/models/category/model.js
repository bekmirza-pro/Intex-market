const { fetch, fetchAll } = require("../../utils/pg");

const CREATE_CATEGORY = `INSERT INTO category(name, name_uz) VALUES ($1,$2)
RETURNING *
`;

const CATEGORY = `SELECT * FROM category WHERE state = true`;

const FIND_CATEGORY = `SELECT * FROM category WHERE id = $1`;

const UPDATE_CATEGORY = `UPDATE category SET 
    name = COALESCE($1, name), 
    name_uz = COALESCE($1, name_uz) 
                         WHERE id = $3 RETURNING *
`;

const DELETE_CATEGORY = `UPDATE category SET state = $1 WHERE id = $2 RETURNING id
`;

const createCategory = (...values) => fetch(CREATE_CATEGORY, values);
const getCategory = () => fetchAll(CATEGORY);
const getOneCategory = (...values) => fetch(FIND_CATEGORY, values);
const updateCategory = (...values) => fetch(UPDATE_CATEGORY, values);
const deleteCategory = (...values) => fetch(DELETE_CATEGORY, values);

module.exports = {
  createCategory,
  getCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
