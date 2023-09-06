import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function PersonalDetails() {
  // gender value
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState(null);

  //   address values
  const [address, setAddress] = useState();
  const [number, SetNumber] = useState(null);
  const [pincode, setPincode] = useState(null);

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  // const [getcountry, setCountry] = useState("India");
  // const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [selectedcity, setSelectedCity] = useState();

  useEffect(() => {
    try {
      axios
        .get(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  let states = data.filter((state) => state.country === "India");
  states = [...new Set(states.map((item) => item.subcountry))];
  states.sort();
  // console.log(states);

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

  const onsubmit = (e) => {
    e.preventDefault();

    if (
      selectedState &&
      selectedcity &&
      gender &&
      birthday &&
      address &&
      number &&
      pincode
    ) {
      const validate = data.find((item) => item.name === selectedcity);
      // console.log("validate", validate);
      if (validate) {
        if (validate.subcountry === selectedState) {
          console.log("birthday", birthday);
          console.log("gender", gender);
          console.log("address", address);
          console.log("number", number);
          console.log("pincode", pincode);

          console.log("selectedState", selectedState);
          console.log("selectedcity", selectedcity);
        } else {
          toast.error("Please select the location again!");
        }
      }
    } else {
      toast.error("Please fill the detaials correctly");
    }
  };

  return (
    <>
      <div className="card border mb-4">
        <div className="card-header border-bottom p-3">
          <h5 className="card-header-title mb-0">Personal Details</h5>
        </div>
        <div className="card-body">
          {/* Full name */}
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                defaultValue="Louis"
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control"
                defaultValue="Ferguson"
                placeholder="Last name"
              />
            </div>
          </div>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="+91 0123456789"
              />
              <button type="button" className="btn btn-primary">
                Verify
              </button>
            </div>
          </div>
          {/* Profile picture */}
          <div className="mb-3">
            <label className="form-label">Profile picture</label>
            {/* Avatar upload START */}
            <div className="d-flex align-items-center">
              <div className="position-relative me-3">
                {/* Avatar edit */}
                <div className="position-absolute top-0 end-0  z-index-9">
                  <a
                    className="btn btn-sm btn-light btn-round mb-0 mt-n1 me-n1"
                    href="#"
                  >
                    <i className="bi bi-pencil" />
                  </a>
                </div>
                {/* Avatar preview */}
                <div className="avatar avatar-xl">
                  <img
                    className="avatar-img rounded-circle border border-white border-3 shadow"
                    src="/assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* Avatar remove button */}
              <div className="avatar-remove">
                <button type="button" className="btn btn-light">
                  Delete
                </button>
              </div>
            </div>
            {/* Avatar upload END */}
          </div>
          <div className="row">
            {/* Birthday */}
            <div className="mb-3 col-md-6">
              <label className="form-label">Birthday</label>
              <input
                type="date"
                className="form-control flatpickr-input"
                placeholder="DD/MM/YYYY"
                defaultValue="12/10/1990"
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>
            {/* gender */}
            <div className="mb-3 col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* {console.log(gender)} */}
          </div>
          {/* Job title */}
          {/* <div className="mb-3">
                  <label className="form-label">Job title</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="An editor at Blogzine"
                  />
                </div> */}
          {/* Location */}
          {/* <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="New Hampshire"
                  />
                </div> */}

          {/* address  */}
          <h5 className="my-2">Address</h5>
          <div className="row">
            <div className="mb-3 col-sm-9">
              <label className="form-label">Address</label>
              <input
                required
                placeholder="Enter your home address"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col-sm-3">
              <label className="form-label">Number</label>
              <input
                required
                placeholder="No."
                type="number"
                className="form-control"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-sm-4">
              <label className="form-label">Select state</label>
              <select id="state" className="form-select" onChange={handleState}>
                <option hidden>State</option>
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
                {/* <option value="AL">New Delhi</option> */}
              </select>
            </div>
            <div className="mb-3 col-sm-4">
              <label className="form-label">City</label>
              <select id="city" className="form-select" onChange={handleCity}>
                <option hidden>City</option>
                {cities.map((city, index) => (
                  <option key={index}>{city}</option>
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
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="form-label">Bio</label>
            <textarea
              className="form-control"
              rows={3}
              defaultValue={
                "I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
              }
            />
            <div className="form-text">Brief description for your profile.</div>
          </div>

          {/* Save button */}
          <div className="d-flex justify-content-end mt-4">
            <a href="#" className="btn text-secondary border-0 me-2">
              Discard
            </a>
            <button onClick={(e) => onsubmit(e)} className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
