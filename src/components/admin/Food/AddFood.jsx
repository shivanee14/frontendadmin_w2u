import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddFood() {
  const FOOD_API = process.env.REACT_APP_FOOD_URL;

  const [restuarant, setRestaurant] = useState("");      // restaurant_name
  const [address, setAddress] = useState("");            // address
  const [offer, setOffer] = useState("");                // offer_description
  const [amenity, setAmenity] = useState("");            // amenities
  const [rules, setRules] = useState("");                // rules
  const [desc, setDesc] = useState("");                  // description
  const [rating, setRating] = useState("");              // rating_and_review,
  const [hotelStar, setHotelStar] = useState(0);        // hotel_star
  const [image, setImage] = useState(null);              // my-images

  const handleFood = async () => {

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
      const response = await axios.post(FOOD_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Food Details added Successfully");
        // console.log("DATA RESPONSE", response.data);
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
    }
    catch (error){
      console.error(error);
    }
  }

  return (<>
    <Card>
      <Card.Body>
        <h4 className='text-center mt-2 mb-4'>Add Food Details</h4>
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
        <Button className='my-2' onClick={() => handleFood()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddFood