const { fetch, fetchAll } = require("../../utils/pg");

const GET_CATEGORY = `
        SELECT id,
              name,
              name_uz
        FROM
              category
        WHERE
              state = true;`;

const GET_PRODUCT = `
        SELECT
            *
        FROM
            product
        WHERE
            id = $1 and state = true;`;

const GET_PRODUCT_FILTER = `
        SELECT 
            id,
            category_id,
            picture_link,
            price,
            sale_price,
            quantity,
            frame,
            frame_uz,
            size,
            depth,
            state,
            ps.name status_name,
            ps.name_uz status_name_uz,
            equipment,
            equipment_uz
        FROM 
            product p 
        LEFT JOIN 
            ( SELECT 
                id product_s,
                name, 
                name_uz 
              FROM 
                product_status
            ) ps 
          ON ps.product_s = p.status_id
        WHERE category_id = $1 and state = true;
`;

const GET_PRODUCT_ALL = `
      SELECT 
          * 
      FROM 
          product
      WHERE state = true;`;

const GET_SITE = `SELECT * FROM site;`;

const POST = `INSERT INTO orders 
                ( product_id, name, phone_number, address, location ) 
              VALUES
                ( $1, $2, $3, $4, $5 )
              RETURNING 
                  id,
                  product_id,
                  name,
                  phone_number,
                  address,
                  location;`;

const POST_CONSULTATION = `
        INSERT INTO consultations
            ( name, phone_number ) 
        VALUES
            ( $1, $2 )
        RETURNING 
            id,
            name,
            phone_number;`;

const getCategory = () => fetchAll(GET_CATEGORY);
const getProduct = (...values) => fetch(GET_PRODUCT, values);
const getProductFilter = (...values) => fetchAll(GET_PRODUCT_FILTER, values);
const getProductAll = () => fetchAll(GET_PRODUCT_ALL);
const getSiteInfo = () => fetchAll(GET_SITE);
const postOrder = (...values) => fetch(POST, values);
const postConsultation = (...values) => fetch(POST_CONSULTATION, values);

module.exports = { getCategory, getProduct, getProductAll, getSiteInfo, postOrder, getProductFilter, postConsultation };