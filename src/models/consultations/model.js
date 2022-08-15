const { fetch, fetchAll } = require("../../utils/pg");

const CREATE_CONSULTATION = `INSERT INTO consultations(name, phone_number) VALUES ($1,$2)
RETURNING *
`;

const CONSULTATION = `SELECT * FROM consultations WHERE state = true`;

const FIND_CONSULTATION = `SELECT * FROM consultations WHERE id = $1`;

const UPDATE_CONSULTATION = `UPDATE consultations SET status = $1 WHERE id = $2 RETURNING *
`;
const DELETE_CONSULTATION = `UPDATE consultations SET state = $1 WHERE id = $2 RETURNING id
`;

const createConsultation = (...values) => fetch(CREATE_CONSULTATION, values);
const getConsultation = () => fetchAll(CONSULTATION);
const getOneConsultation = (...values) => fetch(FIND_CONSULTATION, values);
const updateConsultation = (...values) => fetch(UPDATE_CONSULTATION, values);
const deleteConsultation = (...values) => fetch(DELETE_CONSULTATION, values);

module.exports = {
  createConsultation,
  getConsultation,
  getOneConsultation,
  updateConsultation,
  deleteConsultation,
};
