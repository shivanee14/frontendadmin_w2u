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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${advertisment_URL}/${id}`);
      fetchAdvertisment();
    } catch (err) {
      console.error(err.response || "Error deleting category");
    }
  };
  const [show, setShow] = useState(false);
  const [advertId,setAdvertId] = useState("")
 const [adverttitle,setAdverttitle] = useState("")
 const [advertdescription,setAdvertdescription] = useState("")
 const [advertimageURL,setAdvertimageURL] = useState("")
 const [advertstartDate,setAdvertstartDate] = useState("")
 const [advertendDate,setAdvertendDate] = useState("")
 const [advertbusinessListing,setAdvertbusinessListing] = useState("")

 const handleEdit = async (id) => {
  setShow(true);
  setAdvertId(id);
};  

const confirmUpdate = async (e) => {
  e.preventDefault();

   
    if (advertId && adverttitle && advertdescription && advertimageURL && advertstartDate && advertendDate && advertbusinessListing) {
    const formData = new FormData();
    formData.append("title", adverttitle);
    formData.append("description", advertdescription);
    formData.append("my-images", advertimageURL);
    formData.append("startDate", advertstartDate);
    formData.append("endDate", advertendDate);
    formData.append("businessListing", advertbusinessListing);
    

    try {
      const response = await axios.put(`${advertisment_URL}/${advertId}`, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
   
      if (response.data) {
        toast.success("category added successfully");
        e.target.reset();
        console.log(response.data)
        // setcatName("");
        // setcatImage(null);
      }
    } catch (error) {
      console.error(error.response || "Something went wrong");
    }
  } else {
    toast.error("All fields are mandatory.");
  }
};

const handleClose = () => setShow(false);



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
               <td>
                      <div style={{ height: "50px" }}>

                        <a href={`${data.imageURL}`} target="_blank">

                          <img
                            className="img-fluid h-100"
                            src={`${data.imageURL}`}
                            alt=""
                          />

                        </a>
                      </div>
                    </td>
                    <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deletelist =
                          window.confirm("Delete Advertisment list?");
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
                      onClick={() => handleEdit(data._id)}
                    >
                      <i className="bi bi-pencil-square" />
                    </button> 
                  </div>
                </td>
              
            </tr>
            
           ))}
              
            </tbody>
          </table>
              
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="adtitle" className="form-label">
              title
              </label>
              <input
                className="form-control"
                id="adtitle"
                type="text"
                placeholder="Category Name"
                value={adverttitle}
                onChange={(e) => setAdverttitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="adtitle" className="form-label">
              Description
              </label>
              <input
                className="form-control"
                id="adtitle"
                type="text"
                placeholder=" Description"
                value={advertdescription}
                onChange={(e) => setAdvertdescription(e.target.value)}
              />
            </div>

            <div className="col-md-12 position-relative">
              <h6 className="my-2">Add Image</h6>
              <label

                className="w-100"
                htmlFor="my-images"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="form-control stretched-link"
                  type="file"
                  name="my-images"
                  id="image"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={(e) => setAdvertimageURL(e.target.files[0])}
                />
              </label>
            </div>
                
            <div className="mb-3">
              <label htmlFor="adstart" className="form-label">
             startDate
              </label>
              <input
                className="form-control"
                id="adstart"
                type="datetime-local"
                placeholder=" startDate"
                value={advertstartDate}
                onChange={(e) => setAdvertstartDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="adend" className="form-label">
             endDate
              </label>
              <input
                className="form-control"
                id="adend"
                type="datetime-local"
                placeholder=" endtDate"
                value={advertendDate}
                onChange={(e) => setAdvertendDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="adbusiness" className="form-label">
              BusinessListing
              </label>
              <input
                className="form-control"
                id="adbusiness"
                type="text"
                placeholder=" BusinessListing"
                value={advertbusinessListing}
                onChange={(e) => setAdvertbusinessListing(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>


        </div>
      </div>
    </>
  )
}

export default ListAdvertisement