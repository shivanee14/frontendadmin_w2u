import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
const Listwedding_Agent = () => {

    const wedding_agent_URL = process.env.REACT_APP_Wedding_Agent_URL ;

    const domain_URL = process.env.REACT_APP_DOMAIN_URL;
  
    const [wedding_agents, setwedding_agents] = useState([]);
    const [show, setShow] = useState(false);
  
    const fetchWedding_agent = async () => {
      try {
        const response = await axios.get(wedding_agent_URL);
        setwedding_agents(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data.message || "Error fetching wedding_agent");
      }
    };
  
    useEffect(() => {
        fetchWedding_agent();
    }, []);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`${wedding_agent_URL}/${id}`);
          fetchWedding_agent();
        } catch (err) {
          console.error(err.response || "Error deleting wedding_agent");
        }
      };

      
  const [agentid, setagentid] = useState("");
  const [ventureName, setventureName] = useState("");
   const [agentContactno, setagentContactno] = useState("");
  const [agentdescription, setagentdescription] = useState("");


  const handleEdit = async (id) => {
    setShow(true);
    setagentid(id);
    // setcatName(name);    
  };

  const confirmUpdate = async (e) => {
    e.preventDefault();
    
    if (agentid && ventureName && agentContactno && agentdescription) {
      const formData = new FormData();
      formData.append("ventureName", ventureName);
    //   formData.append("agentName", agentName);
    //   formData.append("my-images", agentImage);
    formData.append("contactNo", agentContactno);
    formData.append("description", agentdescription);

      try {
        const response = await axios.put(`${wedding_agent_URL}/${agentid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          fetchWedding_agent();
          setShow(false);
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

  return (

    <>
    <h3>Wedding_Agent</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Venture Name</th>
            {/* <th scope="col">Category Image</th> */}
            <th scope="col">Agent Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {wedding_agents &&
            wedding_agents.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.ventureName}</td>
                {/* <td>{data.agentName}</td> */}
                {/* <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.image}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td> */}
                 <td>{data.contactNo}</td>
                 <td>{data.description}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deletewedding_agent =
                          window.confirm("Delete wedding_agent?");
                        if (deletewedding_agent) {
                          handleDelete(data._id);
                        }
                      }}
                    >
                      <i className="bi bi-trash" />
                    </button>
                    {/* <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                      onClick={() => handleEdit(data._id, data.name)}
                    >
                      <i className="bi bi-pencil-square" />
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>

       {/*  <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
               Venture Name
              </label>
              <input
                className="form-control"
                id="ventureName"
                type="text"
                placeholder="Category Name"
                value={ventureName}
                onChange={(e) => setventureName(e.target.value)}
              />
            </div>
              

            <div className="mb-3">
              <label htmlFor="agentName" className="form-label">
               Agent Name
              </label>
              <input
                className="form-control"
                id="agentName"
                type="text"
                placeholder="Category Name"
                value={agentName}
                onChange={(e) => setagentName(e.target.value)}
              />
            </div>

{/* 
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
                  onChange={(e) => setcatImage(e.target.files[0])}
                />
              </label>
            </div> */}

           {/*   <div className="mb-3">
              <label htmlFor="agentContactno" className="form-label">
              Contact No
              </label>
              <input
                className="form-control"
                id="agentContactno"
                type="number"
                placeholder="Contact no"
                value={agentContactno}
                onChange={(e) => setagentContactno(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="agentdes" className="form-label">
              Contact No
              </label>
              <input
                className="form-control"
                id="agentdes"
                type="text"
                placeholder="Contact no"
                value={agentdescription}
                onChange={(e) => setagentdescription(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
      </table>
    
    </>
  )
}

export default Listwedding_Agent