import axios from "axios";
import React, { useState, useEffect } from "react";

function Address_Selector() {
  // state and city selector
  const [data, setData] = useState([]);
  const [getcountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [cities, setCities] = useState([]);
  const [selectedcity, setSelectedCity] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  // console.log(data);
  const country = [...new Set(data.map((item) => item.country))];
  country.sort();
  // console.log(country);

  const handleCountry = (e) => {
    // country value
    setCountry(e.target.value);

    // changing state dropdown values
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    // console.log(states);
    setState(states);
  };

  const handleState = (e) => {
    // state value
    setSelectedState(e.target.value);

    // changing city dropdown values
    let cities = data.filter((city) => city.subcountry === e.target.value);
    cities = [...new Set(cities.map((item) => item.name))];
    cities.sort();
    // console.log(cities);
    setCities(cities);
  };
  const handleCity = (e) => {
    // city value
    setSelectedCity(e.target.value);
  };

  useEffect(() => {
    if (getcountry && selectedState && selectedcity) {
      console.log("getcountry", getcountry);
      console.log("selectedState", selectedState);
      console.log("selectedcity", selectedcity);
      setCountry();
      setSelectedState();
      setSelectedCity();
    }
  }, [getcountry, selectedState, selectedcity]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mb-3 col-sm-4">
            <label className="form-label">Select country</label>
            <select
              id="country"
              className="form-select"
              onChange={handleCountry}
            >
              <option hidden>Country</option>
              {/* <option value="IN">India</option> */}
              {country.map((items, index) => (
                <option key={index}>{items}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-sm-4">
            <label className="form-label">Select state</label>
            <select id="state" className="form-select" onChange={handleState}>
              <option hidden>State</option>
              {getState.map((items, index) => (
                <option key={index}>{items}</option>
              ))}
              {/* <option value="AL">New Delhi</option> */}
            </select>
          </div>
          <div className="mb-3 col-sm-4">
            <label className="form-label">City</label>
            <select id="city" className="form-select" onChange={handleCity}>
              <option hidden>City</option>
              {cities.map((items, index) => (
                <option key={index}>{items}</option>
              ))}
              {/* <option value="DL">New Delhi</option> */}
            </select>
          </div>

          <div className="col-sm-4">
            <label className="form-label">Pincode</label>
            <input
              required
              placeholder="pincode"
              type="tel"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Address_Selector;
