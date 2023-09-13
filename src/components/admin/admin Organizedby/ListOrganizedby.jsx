import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form  } from "react-bootstrap";


const ListOrganizedby = () => {
    const ORGANIZEDBY_API = process.env.REACT_APP_ORGANIZEDBY_URL ;
 
    const [organizes, setOrganizes] = useState([]);

    const fetchOrganized = async () => {
      try {
        const response = await axios.get(ORGANIZEDBY_API);
        setOrganizes(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data.message || "Error fetching organizes ");
      }
    };
  
    useEffect(() => {
        fetchOrganized();
    }, []);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`${ORGANIZEDBY_API}/${id}`);
          fetchOrganized();
        } catch (err) {
          console.error(err.response || "Error deleting Tourist spots details");
        }
      };

      const [show, setShow] = useState(false);
      const [organizedId, setOrganizedId] = useState("");
      const [organizedTitle, setOrganizedTitle] = useState("");   
      const [descOrganized, setDescOrganized] = useState("");  
      const [organizedDate, setOrganizedDate] = useState("");                 // description
    //   const [image, setImage] = useState(null);              // my-images
    
      const handleEdit = (id, title, desc, date) => {
        setShow(true);
        setOrganizedId(id);
        setOrganizedTitle(title);
        setDescOrganized(desc);
        setOrganizedDate(date);
      }
    
      const ConfirmUpdate = async () => {
        if (organizedId && organizedTitle && descOrganized &&  organizedDate ) {
          const formData = new FormData();
          formData.append('title', organizedTitle);
          formData.append('description', descOrganized);
          formData.append('date', organizedDate);
        //   formData.append('my-images', image);   
    
          try {
            const response = await axios.put(`${ORGANIZEDBY_API}/${organizedId}`, formData, {
              headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });   
            console.log(response)      
            if (response.data) {
              toast.success("organizedBY updated Successfully");
              fetchOrganized();
              setShow(false);
              setOrganizedId("");
              setOrganizedTitle("");
              setOrganizedDate("");
              setDescOrganized("");
            //   setImage(null);
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
    <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>List of OrganizedBY</h4>
      <Row style={{color: "#2B3542", fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex align-items-start">
          <div  className="text-md cursor-pointer sort">Index</div>
        </Col>
        <Col lg="3" className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Title</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Description</div>
        </Col>
        <Col lg="3" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Date</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
      </Row>

      {organizes && organizes.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Title</div>
                <div className="text-alternate">{data.title}</div>
              </Col>
              
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Description</div>
                <div className="text-alternate">{data.description}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Date</div>
                <div className="text-alternate">{data.date}</div>
              </Col>
              <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => {
                  const deletecategory = window.confirm("Delete  OrganizedBY ?");
                  if (deletecategory) { handleDelete(data._id); }
                  }}>
                    <i className="bi bi-trash" />
                  </Button>
              </Col>
              <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => handleEdit(data._id, data.title, data.description , data.date)}>
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
          <Form.Label className='my-1' htmlFor="organizedTitle">Tourist Place Name</Form.Label>
          <Form.Control  className='my-1' value={organizedTitle} onChange={(e) => setOrganizedTitle(e.target.value)} id="organizedTitle" type="text" placeholder="Title"/> 
          {/* <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  /> */}
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={descOrganized} onChange={(e) => setDescOrganized(e.target.value)} id="desc" type="text" placeholder="Description" />
         <Form.Label className='my-1' htmlFor="date">Date</Form.Label>
          <Form.Control  className='my-1' value={organizedDate} onChange={(e) => setOrganizedDate(e.target.value)} id="date" type="datetime-local" placeholder="Date" />
          
        </Form>  
        <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
        <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>
      </Modal.Body>
    </Modal> 
    </div>
    
    </>
  )
}

export default ListOrganizedby;