const dotenv = require("dotenv");
dotenv.config();
const config = {
  url: process.env.URL,
  grantType: process.env.GRANT_TYPE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  selectData: process.env.SELECT_DATA,
  bookingData: process.env.BOOKING_DATA,
};
module.exports = { ...config };
