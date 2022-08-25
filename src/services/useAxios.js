const axios = require("axios");

function AxiosPost(link, payload, extraHeaders) {
  return axios
    .post(link, payload, {
      headers: {
        "content-type": "application/json",
        ...extraHeaders,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

function AxiosGet(link, extraHeaders) {
  return axios
    .get(link, {
      headers: { "Content-Type": "application/json", ...extraHeaders },
    })
    .then((res) => res) //.data)
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { AxiosGet, AxiosPost };
