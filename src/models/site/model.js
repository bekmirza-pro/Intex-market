const {fetch} = require("../../utils/pg")

const UPDATE_SITE_PHONE = `UPDATE site SET phone_number = $1 RETURNING phone_number 
`;

const UPDATE_SITE_ADDRESS = `UPDATE site SET address = $1, address_uz = $2 RETURNING address, address_uz 
`;

const UPDATE_SITE_TIME = `UPDATE site SET work_time = $1, work_uz_time = $2 RETURNING work_time, work_uz_time 
`;

const UPDATE_SITE_TELEGRAM = `UPDATE site SET telegram_link = $1 RETURNING telegram_link 
`;

const UPDATE_SITE_INSTAGRAM = `UPDATE site SET instagram_link = $1 RETURNING instagram_link 
`;

const updatePhoneNum = (...values) => fetch(UPDATE_SITE_PHONE, values);
const updateAddress = (...values) => fetch(UPDATE_SITE_ADDRESS, values);
const updateWokTime = (...values) => fetch(UPDATE_SITE_TIME, values);
const updateTelegram = (...values) => fetch(UPDATE_SITE_TELEGRAM, values);
const updateInstagram = (...values) => fetch(UPDATE_SITE_INSTAGRAM, values);

module.exports = {updatePhoneNum, updateAddress, updateWokTime, updateTelegram, updateInstagram};