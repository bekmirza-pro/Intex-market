const { fetch, fetchAll } = require("../../utils/pg");

const CREATE_PRODUCT = `INSERT INTO product(
    category_id,
    picture_link,
    price,
    sale_price,
    quantity,
    frame,
    frame_uz,
    size,
    depth,
    status_id, 
    equipment, 
    equipment_uz) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
RETURNING *
`;

const PRODUCTS = `SELECT * FROM product WHERE state = true`;

const FIND_PRODUCT = `SELECT * FROM product WHERE id = $1`;

const UPDATE_PRODUCT = `UPDATE product SET 
       category_id = COALESCE($1, category_id),
       picture_link = COALESCE($2, picture_link),
       price = COALESCE($3, price),
       sale_price = COALESCE($4, sale_price),
       quantity = COALESCE($5, quantity),
       frame = COALESCE($6, frame),
       frame_uz = COALESCE($7, frame_uz),
       size = COALESCE($8, size),
       depth = COALESCE($9, depth),
       status_id = COALESCE($10, status_id),
       equipment = COALESCE($11, equipment),
       equipment_uz = COALESCE($12, equipment_uz)
                         WHERE id = $13 RETURNING id
`;


const DELETE_PRODUCT = `UPDATE product SET state = $1 WHERE id = $2 RETURNING id
`;

const createProduct = (...values) => fetch(CREATE_PRODUCT, values);
const getProduct = () => fetchAll(PRODUCTS);
const getOneProduct = (...values) => fetch(FIND_PRODUCT, values);
const updateProduct = (...values) => fetch(UPDATE_PRODUCT, values);
const deleteProduct = (...values) => fetch(DELETE_PRODUCT, values);


module.exports = {
  createProduct,
  getOneProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
