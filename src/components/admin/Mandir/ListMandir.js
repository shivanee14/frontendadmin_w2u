import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form  } from "react-bootstrap";

function ListMandir() {
    const MANDIR_API = process.env.REACT_APP_MANDIR_URL ;
    const [mandir, setMandir] = useState([]);
  
    const fetchMandir =  async () => {
      try {
        const response = await axios.get(MANDIR_API);
        setMandir(response.data);
        console.log(response.data);
      } 
      catch (err) {
        console.error(err.response.data.message || "Error fetching Food Detail!!!");
      }   
    }
  
    useEffect(() => {
      fetchMandir();
    }, []);
  
    const handleEdit = () => {
      console.log("handleEdit");
    }
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`${MANDIR_API}/${id}`);
        fetchMandir();
      } catch (err) {
        console.error(err.response || "Error deleting Mandir details");
      }
    };
    
  return (<>
    <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>List of Mandirs</h4>
    <Row style={{color: "#2B3542",  fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex align-items-start">
          <div  className="text-md cursor-pointer sort">Index</div>
        </Col>
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Mandir Name</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Details</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Location</div>
        </Col>
        <Col lg="3" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Address</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
      </Row>
      {mandir && mandir.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Mandir Name</div>
                <div className="text-alternate">{data.name}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Details</div>
                <div className="text-alternate">{data.details}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Location</div>
                <div className="text-alternate">{data.location}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Address</div>
                <div className="text-alternate">{data.address}</div>
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
                  onClick={() => handleEdit(data._id, data.name, data.experience, data.location, data.guide_location_title )}>
                    <i className="bi bi-pencil-square" />
                  </Button>
              </Col>
              <hr />
            </Row>
          </Card.Body>
        </Card>
      ))}

  {/* <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
       <Modal.Title>Edit Guide</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Label className='my-1' htmlFor="guideName">Guide Name</Form.Label>
        <Form.Control  className='my-1' value={guideName} onChange={(e) => setGuideName(e.target.value)} id="guideName" type="text" placeholder="Guide Name"/> 
        <Form.Label className='my-1' htmlFor="guideImage">Guide Image</Form.Label>
        <Form.Control  className='my-1' onChange={(e) => setGuideImage(e.target.files[0])} id="guideImage" accept="image/gif, image/jpeg, image/png" type="file"  />
        <Form.Label className='my-1' htmlFor="locationTitle">Guide Location Title</Form.Label>
        <Form.Control  className='my-1' value={locationTitle} onChange={(e) => setLocationTitle(e.target.value)} id="locationTitle" type="text" placeholder="Location for Guide" />
        <Form.Label className='my-1' htmlFor="guideLocation">Guide Location</Form.Label>
        <Form.Control  className='my-1' value={guideLocation} onChange={(e) => setGuideLocation(e.target.value)} id="guideLocation" type="text" placeholder="Guide's Location" />
        <Form.Label className='my-1' htmlFor="exp">Experience</Form.Label>
        <Form.Control  className='my-1' value={exp} onChange={(e) => setExp(e.target.value)} id="exp" type="text" placeholder="Guide's Experience" />
      </Form>    
      <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
      <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>

    </Modal.Body>
  </Modal> */}
    </div>
  </>)
}

export default ListMandir