import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';
import './tourist.css';

function AddTourist() {
  const TOURIST_API = process.env.REACT_APP_TOURIST_URL;
  
  const [touristName, setTouristName] = useState("");    // place_name
  const [address, setAddress] = useState("");            // address
  const [desc, setDesc] = useState("");                  // description
  const [image, setImage] = useState(null);              // my-images

  const handleTourist = async () => {

    console.log('place_name', touristName);
    console.log('address', address);
    console.log('description', desc);
    console.log('my-images', image);    

    const formData = new FormData();
    formData.append('place_name', touristName);
    formData.append('address', address);
    formData.append('description', desc);
    formData.append('my-images', image);    

    try {
      const response = await axios.post(TOURIST_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Tourist Place Added Successfully");
        setTouristName("");
        setAddress("");
        setDesc("");
        setImage(null);
      }
    }
    catch (error){
      console.error(error);
    }
  }

  return (<>
    <Card className=' mt-4'>
      <Card.Body>
        <h4 className='text-center mt-2 mb-4'>Add Tourist Place Details</h4>
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
        <Button className='my-2' onClick={() => handleTourist()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddTourist;