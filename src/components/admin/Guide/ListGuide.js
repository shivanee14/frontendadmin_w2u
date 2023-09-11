import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger  } from "react-bootstrap";

function ListGuide() {
  const GUIDE_API = process.env.REACT_APP_GUIDES_URL;
  const [guide, setGuide] = useState([]);
 
  const fetchSocial = async () => {
    try {
      const response = await axios.get(GUIDE_API);
      setGuide(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchSocial();
  }, []);

  function handleSort(){
    console.log("handleSort");
  }

  return (<>
    <h4 className='text-center mt-2 mb-4'>List of Guides</h4>
    <Row style={{color: "#2B3542"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex">
          <div  className="text-md cursor-pointer sort" onClick={() => handleSort('email')}> Index no. </div>
        </Col>
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-1 d-flex justify-content-center align-items-lg-center">
          <div  className="text-md cursor-pointer sort" onClick={() => handleSort('email')}> Name </div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort" onClick={() => handleSort('firstName')}> Experience </div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort" onClick={() => handleSort('lastName')}> Location </div>
        </Col>
        <Col lg="4" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort" onClick={() => handleSort('mobileNo')}> Locations for guide </div>
        </Col>
      </Row>

      {guide && guide.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              {/* <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col> */}
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Name</div>
                <div className="text-alternate">{data.name}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Experience</div>
                <div className="text-alternate">{data.experience}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Location</div>
                <div className="text-alternate">{data.location}</div>
              </Col>
              <Col xs="6" lg="4" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Location for guide</div>
                <div className="text-alternate">{data.guide_location_title}</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
  </>)
}

export default ListGuide;
