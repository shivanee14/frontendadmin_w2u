import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "../super components/pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";

function SearchedData({ params }) {
  // console.log(params);
  const business_URL = process.env.REACT_APP_BUSINESS_LISTING;
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const [category_data, setCategory_data] = useState([]);
  const [businessList, setBusinessList] = useState([]);



  let searched_query = params.searched_query.split("=")[1];

  searched_query = searched_query.replace(/\+/g, " ")

  // set business listing

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // get logitude and latitude

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);


  const setLocation = () => {

    setLatitude(localStorage.getItem("latitude"));
    setLongitude(localStorage.getItem("longitude"));
  }

  const getBusinessListing = async (query) => {
    try {
      setLoading(true);

      const response = await axios.get(

        query ?
          `${business_URL}/search/?latitude=${latitude}&longitude=${longitude}&keyword=${query}`
          :
          `${business_URL}/search/?latitude=${latitude}&longitude=${longitude}`
      );
      // console.log(response);
      setBusinessList(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLocation = () => {

    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        function (position) {
          localStorage.setItem("latitude", position.coords.latitude);
          localStorage.setItem("longitude", position.coords.longitude);
        },
        function (err) {
          console.error(err.message);
        }
      );
    } else {
      console.error("GeoLocation not available.");
    }
  }
  useEffect(() => {

    setLocation();

    if (latitude && longitude) {

      getBusinessListing(searched_query);

    } else {
      getUserLocation();
    }
  }, [latitude, longitude]);

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = businessList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // total number of pages
  const pageCount = Math.ceil(businessList.length / postsPerPage);

  // search result in udaipur

  const navigate = useNavigate();

  const [searched_item, setSearched_item] = useState("")

  const findinUdaipur = (e) => {
    e.preventDefault();
    navigate(`/find_in_udaipur/q=${searched_item.replace(/\s/g, "+")}`)
    getUserLocation();
    setLocation();
    getBusinessListing(searched_item);
    setSearched_item("")

  }


  // set category list
  // const getCategoryData = async () => {
  //   try {
  //     setLoading(true);

  //     const response = await axios.get(category_URL);
  //     setCategory_data(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getCategoryData();
  // }, [params]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <main>
        <section className="pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto text-center py-5">
                <span>Search results in</span>
                <h2 className="display-5">Udaipur</h2>
                <span className="lead">
                  {`${businessList.length} result found`}
                </span>
                <div className="row">
                  <div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
                    <form className="input-group mt-4" onSubmit={findinUdaipur}>
                      {/* <form className="input-group mt-4"> */}
                      <input
                        className="form-control form-control-lg border-dark"
                        type="search"
                        placeholder="Udaipur..."
                        aria-label="Search"
                        onChange={(e) => {
                          setSearched_item(e.target.value);
                        }}
                      />
                      <button className="btn btn-dark btn-lg m-0" type="submit">
                        <span className="d-none d-md-block">Search</span>
                        <i className="d-block d-md-none fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                {currentPosts.map((item, index) => {
                  // const cat_data = category_data.find(
                  //   (data) => item.businesslisting_categoryName == data.id
                  // );
                  // const subCat_data = subCategory.find(
                  //   (data) => item.businesslisting_subcategoryName == data.id
                  // );

                  return (
                    <SearchedBusinessList
                      key={index}
                      item={item}
                    // cat_data={cat_data}
                    // subCat_data={subCat_data}
                    />
                  );
                })}

                <Pagination paginate={paginate} pageCount={pageCount} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchedData;

function SearchedBusinessList({ item }) {
  return (
    <>
      <div className="card border rounded-2 up-hover p-4 mb-4">
        <div className="row g-3">
          <div
            className="col-10 mx-auto mx-sm-0 col-sm-4"
            style={{ height: "14rem" }}
          >
            <img
              className="rounded-2 h-100 w-100"
              src="/assets/images/blog/16by9/07.jpg"
              // src={item}
              alt="Card image"
            />
          </div>
          <div className="col-sm-8">
            <h3 className="card-title">
              <Link
                to="#"
                // to={`/${cat_data.category_name.replace(/\s/g, "_")}/${cat_data.id
                //   }/${subCat_data.subcategory_Name.replace(/\s/g, "_")}/${subCat_data.id
                //   }/${item.businesslisting_companyfirmname.replace(/\s/g, "_")}/${item.id
                //   }`}
                className="btn-link text-reset stretched-link"
              >
                {item.title}
              </Link>
            </h3>
            <p className="">{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
