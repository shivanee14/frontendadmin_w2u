import React, { useState, useEffect } from "react";
import axios from "axios";
import NavItems from "./nav items/NavItems";
import toast from "react-hot-toast";

function Navbar() {
  const [category_data, setCategory_data] = useState([]);

  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  // set category link Menu item

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(category_URL);
        // const response = await axios.get("http://localhost:8000/api/category/");
        setCategory_data(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const category = category_data.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav navbar-nav-scroll mx-lg-auto">
          {category.map((item, index) => {
            return index < 8 ? <NavItems navitem={item} key={index} /> : "";
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
