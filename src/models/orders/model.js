const { fetch, fetchAll } = require("../../utils/pg");


const ORDERS = `SELECT * FROM orders WHERE state = true`;

const UPDATE_ORDERS = `UPDATE orders SET status = $1 WHERE id = $2 RETURNING id, product_id
`;

const FIND_ORDER = `SELECT * FROM orders WHERE id = $1`;

const DELETE_ORDERS = `UPDATE orders SET state = $1 WHERE id = $2 RETURNING id
`;



const getOrders = () => fetchAll(ORDERS);
const updateOrders = (...values) => fetch(UPDATE_ORDERS, values);
const findOrder = (...values) => fetch(FIND_ORDER, values);
const deleteOrders = (...values) => fetch(DELETE_ORDERS, values);

module.exports = { getOrders, findOrder, updateOrders, deleteOrders };

