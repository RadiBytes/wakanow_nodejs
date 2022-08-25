const { url, username, password, grantType } = require("./config");
const { getAirports } = require("./src/api_requests");
const { Wakanow } = require("./src/Wakanow");
console.log(url, username, password, grantType);
const wakanow = new Wakanow(url, username, password, grantType);

wakanow.authenticate().then((a) => console.log("ssss", a));

// console.log("kkk", wakanow.access_token);
wakanow.getAirports();
// wakanow.flightSearch();
