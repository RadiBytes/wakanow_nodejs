const axios = require("axios");
const qs = require("qs");

const generateToken = (url, grantType, username, password) => {
  var data = qs.stringify({
    grant_type: grantType,
    Username: username,
    Password: password,
  });

  var config = {
    method: "post",
    url: url + "/token",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      payload: "x-www-form-urlencoded",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
module.exports = { generateToken };
