import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddMandir() {
  
  const MANDIR_API = process.env.REACT_APP_MANDIR_URL ;

  const [mandirName, setMandirName] = useState("");      // name
  const [address, setAddress] = useState("");            // address
  const [location, setLocation] = useState("");          // location
  const [details, setDetails] = useState("");            // details
  const [image, setImage] = useState(null);              // my-images

  const handleMandir = async () => {

    const formData = new FormData();
    formData.append('name', mandirName);
    formData.append('address', address);
    formData.append('location', location);
    formData.append('details', details);
    formData.append('my-images', image);

    try {
      const response = await axios.post(MANDIR_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Mandir Details added Successfully");
        // console.log("DATA RESPONSE", response.data);
        setMandirName("");
        setAddress("");
        setLocation("");
        setDetails("");
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
        <h4 className='text-center mt-2 mb-4'>Add Mandir Details</h4>
        <Form>
          <Form.Label className='my-1' htmlFor="mandirName">Mandir Name</Form.Label>
          <Form.Control  className='my-1' value={mandirName} onChange={(e) => setMandirName(e.target.value)} id="mandirName" type="text" placeholder="Mandir Name"/> 
          <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="address">Address</Form.Label>
          <Form.Control  className='my-1' value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Address" />
          <Form.Label className='my-1' htmlFor="location">Location</Form.Label>
          <Form.Control  className='my-1' value={location} onChange={(e) => setLocation(e.target.value)} id="location" type="text" placeholder="Location" />
          <Form.Label className='my-1' htmlFor="details">Details</Form.Label>
          <Form.Control  className='my-1' value={details} onChange={(e) => setDetails(e.target.value)} id="details" type="text" placeholder="Details" />
        </Form>
        <Button className='my-2' onClick={() => handleMandir()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddMandir;
