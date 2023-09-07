import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ListBusinessListing() {
  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING ;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [businesses, setBusinesses] = useState([]);

  const fetchbusinesses = async () => {
    try {
      const response = await axios.get(business_listing_URL);
      setBusinesses(response.data);
      // console.log("hello")
      //  console.log(response);
    } catch (err) {
      console.log("business_listing_URL", err);
      toast(err.response.data.message || "Error fetching businesses");
    }
  };
  useEffect(() => {
    fetchbusinesses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${business_listing_URL}/${id}`);
      fetchbusinesses();
    } catch (err) {
      console.error(err.response || "Error deleting bussiness");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h3 className="d-flex justify-content-center mt-4 mb-4">
            Business Listing
          </h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr className="fs-6">
                <th scope="col">Id</th>
                <th scope="col">Company Firm Name</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Email</th>
                <th scope="col">Category</th>
                <th scope="col">Subcategory</th>
                <th scope="col">Company Firm Logo</th>
                <th scope="col">Website Url</th>
                <th scope="col">Description Product Service</th>
                <th scope="col">Longitude</th>
                <th scope="col">Latitude</th>
                <th scope="col">Business Listing Image</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {businesses &&
                businesses.map((data, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{data.address.location.coordinates[0]}</td>
                    <td>{data.mobileNo}</td>
                    <td>{data.email}</td>
                    <td>{data.description}</td>
                    <td>{data.description}</td>
                    <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.images}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.images}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                    {/* <td>{data.description}</td>
                    <td>{data.websiteUrl}</td>
                    <td>{data.address.location.coordinates[0]}</td>
                    <td>{data.address.location.coordinates[1]}</td> */}




                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => {
                             const deletelist =
                            window.confirm("Delete Business List?");
                           if (deletelist) {
                           handleDelete(data._id);
                           }
                         }}
                        >
                          <i className="bi bi-trash" />
                        </button>
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                          // onClick={() => handleEdit(data._id)}
                        >
                          <i className="bi bi-pencil-square" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListBusinessListing;
