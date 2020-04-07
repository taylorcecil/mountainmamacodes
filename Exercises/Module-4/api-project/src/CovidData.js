import React, { useEffect } from "react";
import axios from "axios";

//https://api.covid19api.com/live/country/united-states/status/confirmed

export default function CovidData() {
  const [covidData, setData] = useState();

  axios
    .get(
      "https://api.covid19api.com/live/country/united-states/status/confirmed"
    )
    .then(res => {});
}
