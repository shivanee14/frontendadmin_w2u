import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form  } from "react-bootstrap";

function ListTourist() {
  const TOURIST_API = process.env.REACT_APP_TOURIST_URL;  
  const [tourist, setTourist] = useState([]);

  console.log("hello");

  const fetchTourist =  async () => {
    try {
      const response = await axios.get(TOURIST_API);
      setTourist(response.data);
      console.log(response.data);
    } 
    catch (err) {
      console.error(err.response.data.message || "Error fetching Food Detail!!!");
    }   
  }

  useEffect(() => {
    fetchTourist();
  }, []);

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [touristName, setTouristName] = useState("");    // place_name
  const [address, setAddress] = useState("");            // address
  const [desc, setDesc] = useState("");                  // description
  const [image, setImage] = useState(null);              // my-images

  const handleEdit = (id, name, add, desc) => {
    setShow(true);
    setEditId(id);
    setTouristName(name);
    setAddress(add);
    setDesc(desc);
  }

  const ConfirmUpdate = async () => {
    if (touristName && address &&  desc && image ) {
      const formData = new FormData();
      formData.append('place_name', touristName);
      formData.append('address', address);
      formData.append('description', desc);
      formData.append('my-images', image);   

      try {
        const response = await axios.put(`${TOURIST_API}/${editId}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Tourist places updated Successfully");
          fetchTourist();
          setShow(false);
          setEditId("");
          setTouristName("");
          setAddress("");
          setDesc("");
          setImage(null);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${TOURIST_API}/${id}`);
      fetchTourist();
    } catch (err) {
      console.error(err.response || "Error deleting Tourist spots details");
    }
  };
    
  return (<>
    <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>List of Tourist Spots</h4>
    <Row style={{color: "#2B3542", fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex align-items-start">
          <div  className="text-md cursor-pointer sort">Index</div>
        </Col>
        <Col lg="3" className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Tourist Spot Name</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Image</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Address</div>
        </Col>
        <Col lg="3" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Description</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
      </Row>
      {tourist && tourist.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Tourist Spot</div>
                <div className="text-alternate">{data.place_name}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Address</div>
                <div className="text-alternate"><img src={data.Image} style={{width:'100px',height:"100px"}}></img></div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Address</div>
                <div className="text-alternate">{data.address}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Description</div>
                <div className="text-alternate">{data.description}</div>
              </Col>
              <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => {
                  const deletecategory = window.confirm("Delete Guide?");
                  if (deletecategory) { handleDelete(data._id); }
                  }}>
                    <i className="bi bi-trash" />
                  </Button>
              </Col>
              <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => handleEdit(data._id, data.place_name, data.address, data.description )}>
                    <i className="bi bi-pencil-square" />
                  </Button>
              </Col>
              <hr/>
            </Row>
          </Card.Body>
        </Card>
      ))}

  <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
       <Modal.Title>Edit Guide</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
          <Form.Label className='my-1' htmlFor="touristName">Tourist Place Name</Form.Label>
          <Form.Control  className='my-1' value={touristName} onChange={(e) => setTouristName(e.target.value)} id="touristName" type="text" placeholder="Tourist Name"/> 
          <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="address">Address</Form.Label>
          <Form.Control  className='my-1' value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Address" />
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" type="text" placeholder="Description" />
        </Form>  
      <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
      <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>

    </Modal.Body>
  </Modal> 
    </div>   
  </>)
}

export default ListTourist;