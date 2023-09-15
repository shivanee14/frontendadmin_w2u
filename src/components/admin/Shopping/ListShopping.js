import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form  } from "react-bootstrap";

function ListShopping() {
  const SHOPPING_API =  process.env.REACT_APP_SHOPPING_URL;
  const [shopping, setShopping] = useState([]);

  const fetchShopping =  async () => {
    try {
      const response = await axios.get(SHOPPING_API);
      setShopping(response.data);
      console.log(response.data);
    } 
    catch (err) {
      console.error(err.response.data.message || "Error fetching Food Detail!!!");
    }   
  }

  useEffect(() => {
    fetchShopping();
  }, []);


  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [shoppingName, setShoppingName] = useState("");      // name
  const [slug, setSlug] = useState("");                      // slug
  const [location, setLocation] = useState("");              // location
  const [details, setDetails] = useState("");                // details
  const [tag, setTag] = useState("");                        // tag
  const [image, setImage] = useState(null);                  // my-images

  const handleEdit = (id, name, slug, loc, tag, detail) => {
    setShow(true);
    setEditId(id);
    setShoppingName(name);
    setSlug(slug);
    setLocation(loc);
    setDetails(detail);
    setTag(tag);
  }

  const ConfirmUpdate = async () => {
    if (shoppingName && slug &&  location && details && tag && image) {
      const formData = new FormData();
      formData.append('name', shoppingName);
      formData.append('slug', slug);
      formData.append('location', location);
      formData.append('details', details);
      formData.append('tag', tag);
      formData.append('my-images', image);        

      try {
        const response = await axios.put(`${SHOPPING_API}/${editId}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Shopping place updated Successfully");
          fetchShopping();
          setShow(false);
          setShoppingName("");
          setSlug("");
          setLocation("");
          setDetails("");
          setTag("");
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
      await axios.delete(`${SHOPPING_API}/${id}`);
      fetchShopping();
    } catch (err) {
      console.error(err.response || "Error deleting Mandir details");
    }
  };  

  return (<>
    <div style={{color: "#000000"}}>
      <h4 className='text-center mt-2 mb-4'>List of Shopping Places</h4>
      <Row style={{color: "#2B3542", fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex align-items-start">
          <div  className="text-md cursor-pointer sort">Index</div>
        </Col>
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Shopping Area Name</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Shopping Area Slug</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Image</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Location</div>
        </Col>
        {/* <Col lg="3" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Tag</div>
        </Col> */}
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
      </Row>
      {shopping && shopping.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Shopping Area Name</div>
                <div className="text-alternate">{data.name}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Shopping Area Slug</div>
                <div className="text-alternate">{data.slug}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Location</div>
                <div className="text-alternate"><img src={data.Image} style={{height:"100px",width:"100px"}}></img></div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Location</div>
                <div className="text-alternate">{data.location}</div>
              </Col>
              <Col xs="6" lg="3" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Tag</div>
                <div className="text-alternate">{data.tag}</div>
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
                  onClick={() => handleEdit(data._id, data.name, data.slug, data.location, data.tag, data.details)}>
                    <i className="bi bi-pencil-square" />
                  </Button>
              </Col>
              <hr />
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
          <Form.Label className='my-1' htmlFor="shoppingName">Shopping Area Name</Form.Label>
          <Form.Control  className='my-1' value={shoppingName} onChange={(e) => setShoppingName(e.target.value)} id="shoppingName" type="text" placeholder="Shopping Area Name"/> 
          <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="slug">Shopping Area Slug</Form.Label>
          <Form.Control  className='my-1' value={slug} onChange={(e) => setSlug(e.target.value)} id="slug" type="text" placeholder="Shopping Area Slug" />
          <Form.Label className='my-1' htmlFor="location">Shopping Area Location</Form.Label>
          <Form.Control  className='my-1' value={location} onChange={(e) => setLocation(e.target.value)} id="location" type="text" placeholder="Location" />
          <Form.Label className='my-1' htmlFor="details">Shopping Area Details</Form.Label>
          <Form.Control  className='my-1' value={details} onChange={(e) => setDetails(e.target.value)} id="details" type="text" placeholder="Details" />
          <Form.Label className='my-1' htmlFor="tag">Add Tag</Form.Label>
          <Form.Control  className='my-1' value={tag} onChange={(e) => setTag(e.target.value)} id="tag" type="text" placeholder="Tag" />
        </Form>  
        <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
        <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>
      </Modal.Body>
    </Modal>
    </div>
  </>);
}

export default ListShopping;
