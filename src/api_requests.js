const { AxiosGet, AxiosPost } = require("./services/useAxios");
const zlib = require("zlib");

exports.getAirports = (base_url, token) => {
  return AxiosGet(base_url + "/api/flight/airports", {
    "Content-Type": "application/json",
    "accept-encoding": "gzip,deflate",
    Authorization: `Bearer ${token}`,
  }).then((response) => {
    return response.data;

    // zlib.gunzip(response.data, (err, unzipped) => {
    //   console.log(unzipped, err); //.toString());
    // })
  });
};
exports.flightSearch = (
  base_url,
  token,
  searchType,
  adultsCount,
  childrenCount,
  infantCount,
  from,
  to,
  departureDate,
  currency,
  ticketclass
) => {
  payload = {
    FlightSearchType: searchType,
    Adults: adultsCount,
    Children: childrenCount,
    Infants: infantCount,
    Ticketclass: ticketclass,
    TargetCurrency: currency,
    Itineraries: [
      {
        Departure: from,
        Destination: to,
        DepartureDate: departureDate,
      },
    ],
  };
  //   payload = {
  //     FlightSearchType: "Oneway",
  //     Adults: "1",
  //     Children: "0",
  //     Infants: "0",
  //     Ticketclass: "Y",
  //     TargetCurrency: "NGN",
  //     Itineraries: [
  //       {
  //         Departure: "LOS",
  //         Destination: "ENU",
  //         DepartureDate: "08/29/2022",
  //       },
  //     ],
  //   };
  return AxiosPost(base_url + "/api/flight/search", payload, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  })
    .then((response) => {
      //   return response.data;
      console.log(response.data);

      // zlib.gunzip(response.data, (err, unzipped) => {
      //   console.log(unzipped, err); //.toString());
      // })
    })
    .catch((err) => console.log(err));
};

exports.flightSelect = (base_url, token, currency, selectData) => {
  payload = {
    TargetCurrency: currency,
    SelectData: selectData,
  };
  //   payload = {
  //     TargetCurrency: "NGN",
  //     SelectData: "hshsh",
  //   };
  return AxiosPost(base_url + "/api/flight/select", payload, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  })
    .then((response) => {
      //   return response.data;
      console.log(response.data);

      // zlib.gunzip(response.data, (err, unzipped) => {
      //   console.log(unzipped, err); //.toString());
      // })
    })
    .catch((err) => console.log(err));
};

exports.flightBooking = (base_url, token, currency, selectData) => {
  payload = {
    TargetCurrency: currency,
    SelectData: selectData,
  };
  //   payload = {
  //     TargetCurrency: "NGN",
  //     SelectData: "hshsh",
  //   };
  return AxiosPost(base_url + "/api/flight/book", payload, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  })
    .then((response) => {
      //   return response.data;
      console.log(response.data);

      // zlib.gunzip(response.data, (err, unzipped) => {
      //   console.log(unzipped, err); //.toString());
      // })
    })
    .catch((err) => console.log(err));
};

exports.flightTicketPnr = (base_url, token, bookingId, PnrNumber) => {
  //Ticket PNR after payment has been confirmed.
  payload = {
    BookingId: bookingId,
    PnrNumber: PnrNumber,
  };
  //   payload = {
  //     BookingId: "1707310600002",
  //     PnrNumber: " UPTR7U ",
  //   };
  return AxiosPost(base_url + "/api/flight/ticketpnr", payload, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  })
    .then((response) => {
      //   return response.data;
      console.log(response.data);

      // zlib.gunzip(response.data, (err, unzipped) => {
      //   console.log(unzipped, err); //.toString());
      // })
    })
    .catch((err) => console.log(err));
};
