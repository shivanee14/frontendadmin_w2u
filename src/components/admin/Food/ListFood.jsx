import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form  } from "react-bootstrap";

function ListFood() {
  const FOOD_API = process.env.REACT_APP_FOOD_URL;
  const [food, setFood] = useState([]);

  const fetchFood =  async () => {
    try {
      const response = await axios.get(FOOD_API);
      setFood(response.data);
    } catch (err) {
        console.error(err.response.data.message || "Error fetching Food Detail!!!");
    }   
  }

  useEffect(() => {
    fetchFood();
  }, []);

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [restuarant, setRestaurant] = useState("");      // restaurant_name
  const [address, setAddress] = useState("");            // address
  const [offer, setOffer] = useState("");                // offer_description
  const [amenity, setAmenity] = useState("");            // amenities
  const [rules, setRules] = useState("");                // rules
  const [desc, setDesc] = useState("");                  // description
  const [rating, setRating] = useState("");              // rating_and_review,
  const [hotelStar, setHotelStar] = useState(0);        // hotel_star
  const [image, setImage] = useState(null);              // my-images

  const handleEdit = (id, name, add, offer, amenity, rule, desc, rate, star ) => {
    setShow(true);
    setEditId(id);
    setRestaurant(name);
    setAddress(add);
    setOffer(offer);
    setAmenity(amenity);
    setRules(rule);
    setDesc(desc);
    setRating(rate);
    setHotelStar(star);
  }

  const ConfirmUpdate = async () => {
    if (restuarant && address &&  desc && image && offer && amenity && rules && rating && hotelStar) {
      const formData = new FormData();
      formData.append('restaurant_name', restuarant);
      formData.append('address', address);
      formData.append('offer_description', offer);
      formData.append('amenities', amenity);
      formData.append('rules', rules);
      formData.append('description', desc);
      formData.append('rating_and_review', rating);
      formData.append('hotel_star', hotelStar);
      formData.append('my-images', image);   

      try {
        const response = await axios.put(`${FOOD_API}/${editId}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Food places updated Successfully");
          fetchFood();
          setShow(false);
          setRestaurant("");
          setAddress("");
          setOffer("");
          setAmenity("");
          setRules("");
          setDesc("");
          setRating("");
          setHotelStar(0);
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
      await axios.delete(`${FOOD_API}/${id}`);
      fetchFood();
    } catch (err) {
      console.error(err.response || "Error deleting Food");
    }
  };
   
  
  return (<>
    <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>List of Places for Dining and Lunch</h4>
    <Row style={{color: "#2B3542", fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-1 d-flex align-items-start">
          <div  className="text-md cursor-pointer sort">Index</div>
        </Col>
        <Col lg="2" className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Restaurant Name</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Reviews & Rating</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center ">
          <div className="text-md cursor-pointer sort">Hotel Star</div>
        </Col>
        <Col lg="3" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Address</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
      </Row>
      {food && food.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Index No.</div>
                <div className="text-alternate">{index + 1}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Restaurant Name</div>
                <div className="text-alternate">{data.restaurant_name}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Reviews & Rating</div>
                <div className="text-alternate">{data.rating_and_review}</div>
              </Col>
              <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
                <div  className="text-muted text-small d-lg-none">Hotel Star</div>
                <div className="text-alternate">{data.hotel_star}</div>
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
                  onClick={() => handleEdit(data._id, data.restaurant_name, data.address, data.offer_description, data.amenities, data.rules, data.description, data.rating_and_review, data.hotel_star )}>
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
          <Form.Label className='my-1' htmlFor="restuarant">Restaurant Name</Form.Label>
          <Form.Control  className='my-1' value={restuarant} onChange={(e) => setRestaurant(e.target.value)} id="restuarant" type="text" placeholder="Restuarant Name"/> 
          <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="address">Address</Form.Label>
          <Form.Control  className='my-1' value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Address" />
          <Form.Label className='my-1' htmlFor="offer">Offer</Form.Label>
          <Form.Control  className='my-1' value={offer} onChange={(e) => setOffer(e.target.value)} id="offer" type="text" placeholder="Offer" />
          <Form.Label className='my-1' htmlFor="amenity">Amenities</Form.Label>
          <Form.Control  className='my-1' value={amenity} onChange={(e) => setAmenity(e.target.value)} id="amenity" type="text" placeholder="Amenities" />
          <Form.Label className='my-1' htmlFor="rules">Rules</Form.Label>
          <Form.Control  className='my-1' value={rules} onChange={(e) => setRules(e.target.value)} id="rules" type="text" placeholder="Rules" />
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" type="text" placeholder="Description" />
          <Form.Label className='my-1' htmlFor="rating">Rating and Reviews</Form.Label>
          <Form.Control  className='my-1' value={rating} onChange={(e) => setRating(e.target.value)} id="rating" type="text" placeholder="Rating and Reviews" />
          <Form.Label className='my-1' htmlFor="hotelStar">Star Rating of Hotel</Form.Label>
          <Form.Control  className='my-1' value={hotelStar} onChange={(e) => setHotelStar(e.target.value)} id="hotelStar" type="number" min="1" max="5" placeholder="3" />
        </Form>   
      <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
      <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>
    </Modal.Body>
  </Modal> 
    </div>
  </>)
}

export default ListFood;
