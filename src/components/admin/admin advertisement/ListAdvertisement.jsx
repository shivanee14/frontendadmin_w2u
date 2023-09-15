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

 const handleEdit = async (id,title,des,business) => {
  setShow(true);
  setAdvertId(id);
  setAdverttitle(title);
  setAdvertdescription(des);
  setAdvertbusinessListing(business);
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
    formData.append("businessListingId", advertbusinessListing);
    

    try {
      const response = await axios.put(`${advertisment_URL}/${advertId}`, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
   
      if (response.data) {
        toast.success("advertisment added successfully");
        fetchAdvertisment();
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

  return (<>
    <div className='container-fluid'>
      <div className='row'>
        <h3 className="d-flex justify-content-center mt-4 mb-4"> Advertisement Listing </h3>
        <table style={{overflowX: "visible"}} className="table table-striped table-hover" >
          <thead className="fs-5">
              <tr style={{color:"white"}}>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>               
                <th scope="col">startDate</th>
                <th scope="col">endDate</th>
                <th scope="col">BusinessListing</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody >
          {advertisment && 
           advertisment.map((data, index) => (
            <tr   key={index}>
                <td scope="row" style={{color:"white"}}>{index + 1}</td> 
               <td  style={{color:"white"}}>{data.title}</td>
               <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.imageURL}`} target="_blank">
                      <img className="img-fluid h-100" src={`${data.imageURL}`} alt="" />
                    </a>
                  </div>
                </td>
               <td  style={{color:"white"}}>{data.description}</td>              
               <td  style={{color:"white"}}>{data.startDate}</td>
               <td  style={{color:"white"}}>{data.endDate}</td>
               <td  style={{color:"white"}}>{data.businessListing}</td>
               <td  style={{color:"white"}}>{data.active? "Active" : "Inactive"}</td>
               
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                      onClick={() => { const deletelist = window.confirm("Delete Advertisment list?");
                        if (deletelist) {  handleDelete(data._id);  }  }}>
                      <i className="bi bi-trash" />
                    </button>
                   <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                      onClick={() => handleEdit(data._id,data.title,data.description)}>
                      <i className="bi bi-pencil-square" />
                    </button> 
                  </div>
                </td>              
            </tr>            
           ))}              
            </tbody>
          </table>
              
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton> <Modal.Title>Edit Advertisement </Modal.Title> </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-1">
              <label htmlFor="adtitle" className="form-label">Advertisement Title</label>
              <input className="form-control" id="adtitle" type="text" placeholder="Advertisement Title" value={adverttitle} onChange={(e) => setAdverttitle(e.target.value)}
              />
            </div>
            <div className="mb-1">
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
            <div className="col-md-12 position-relative mb-1">
              <label className="w-100" htmlFor="my-images" style={{ cursor: "pointer" }} > Add Image </label>
                <input
                  className="form-control stretched-link"
                  type="file"
                  name="my-images"
                  id="image"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={(e) => setAdvertimageURL(e.target.files[0])}
                />             
            </div>                
            <div className="mb-1">
              <label htmlFor="adstart" className="form-label">Start Date</label>
              <input
                className="form-control"
                id="adstart"
                type="datetime-local"
                placeholder=" startDate"
                value={advertstartDate}
                onChange={(e) => setAdvertstartDate(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="adend" className="form-label">End Date</label>
              <input
                className="form-control"
                id="adend"
                type="datetime-local"
                placeholder=" endtDate"
                value={advertendDate}
                onChange={(e) => setAdvertendDate(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="adbusiness" className="form-label">
              Business Listing
              </label>
              <input
                className="form-control"
                id="adbusiness"
                type="text"
                placeholder=" Business Listing"
                value={advertbusinessListing}
                onChange={(e) => setAdvertbusinessListing(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="btn btn-outline-success"
              >
                Close
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