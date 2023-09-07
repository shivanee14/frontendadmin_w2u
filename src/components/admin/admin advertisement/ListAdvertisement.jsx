import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";               

function ListAdvertisement() {
  const advertisment_URL = process.env.REACT_APP_POST_ADVERTISEMENT_URL;
  const [advertisment,setAdvertisment] =useState([])

  const fetchAdvertisment = async () => {
    try {
      const response = await axios.get(advertisment_URL);
      setAdvertisment(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching advertisment");
    }
  };

  useEffect(() => {
    fetchAdvertisment();
  }, []);
  return (
  
    <>

      <div className='container-fluid'>
        <div className='row'>

          <h3 className="d-flex justify-content-center mt-4 mb-4">
            Advertisement Listing
          </h3>
          <table style={{overflowX: "visible"}} className="table table-striped table-hover" >

            <thead className="fs-5">
              <tr>
                {/* <th scope="col">Id</th> */}
                <th scope="col">Title</th>
                <th scope="col">Description</th>               
                {/* <th scope="col">startDate</th>
                <th scope="col">endDate</th>
                <th scope="col">BusinessListing</th> */}
                <th scope="col">Active</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
          {advertisment && 
           advertisment.map((data, index) => (
            <tr key={index}>
               {/* <td scope="row">{index + 1}</td> */}
               <td>{data.title}</td>
               <td>{data.description}</td>
              
               {/* <td>{data.startDate}</td>
               <td>{data.endDate}</td>
               <td>{data.businessListing}</td> */}
               <td>{data.active? "Active" : "Inactive"}</td>
               <td><img src={data.imageURL} alt='aa'/>
                </td> 
            </tr>
            
           ))}
              
            </tbody>
          </table>



        </div>
      </div>
    </>
  )
}

export default ListAdvertisement