import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddOnlineDirectory() {
  const DIRECTORY_API = process.env.REACT_APP_ONLINE_DIRECTORY_URL;

  const [title , setTitle] = useState("");                  // title
  const [desc, setDesc] = useState("");                     // description
  const [address, setAddress] = useState("");               // address
  const [latitude, setlatitude] = useState("");             // latitude
  const [longitude, setlongitude] = useState("");           // longitude
  const [mobile, setMobile] = useState("");                 // mobileNo
  const [email, setEmail] = useState("");                   // email
  const [url, setURL] = useState("");                       // websiteUrl
  const [logoimage, setLogoimage] = useState(null);         // my_images

  const handleDirectory = async () => {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('address', address);
    formData.append('mobileNo', mobile);
    formData.append('email', email);
    formData.append('websiteUrl', url);
    formData.append('longitude', longitude);
    formData.append('latitude', latitude);
    formData.append('my-images', logoimage);

    try {
      const response = await axios.post(DIRECTORY_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      if(response){
        toast.success("Directory Details added Successfully");
          setTitle("");
          setDesc("");
          setAddress("");
          setlatitude("");
          setlongitude("");
          setMobile("");
          setEmail("");
          setURL("");                       
          setLogoimage(null);
      }
      console.log(response.data)
    }
    catch (error){
      console.error(error);
    }
  }

  return (<>
    <Card>
      <Card.Body>
        <h4 className='text-center mt-2 mb-4'>Add Directory Details</h4>
        <Form>
          <Form.Label className='my-1' htmlFor="title">Title</Form.Label>
          <Form.Control  className='my-1' value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" placeholder="Title"/> 
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" type="text" placeholder="Description" />
          <Form.Label className='my-1' htmlFor="address">Address</Form.Label>
          <Form.Control  className='my-1' value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Address" />
          <Form.Label className='my-1' htmlFor="latitude">Latitude</Form.Label>
          <Form.Control  className='my-1' value={latitude} onChange={(e) => setlatitude(e.target.value)} id="latitude" type="number" placeholder="Latitude" />
          <Form.Label className='my-1' htmlFor="longitude">Longitude</Form.Label>
          <Form.Control  className='my-1' value={longitude} onChange={(e) => setlongitude(e.target.value)} id="longitude" type="number" placeholder="Longitude" />
          <Form.Label className='my-1' htmlFor="email">Email</Form.Label>
          <Form.Control  className='my-1' value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder="Email" />
          <Form.Label className='my-1' htmlFor="mobile">Mobile No.</Form.Label>
          <Form.Control  className='my-1' value={mobile} onChange={(e) => setMobile(e.target.value)} id="mobile" type="text" placeholder="Mobile No." />
          <Form.Label className='my-1' htmlFor="url">Website URL</Form.Label>
          <Form.Control  className='my-1' value={url} onChange={(e) => setURL(e.target.value)} id="url" type="text" placeholder="Website URL" />
          <Form.Label className='my-1' htmlFor="logoimage">Logo Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setLogoimage(e.target.files[0])} id="logoimage" accept="image/gif, image/jpeg, image/png" type="file"  />
        </Form>
        <Button className='my-2' onClick={() => handleDirectory()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddOnlineDirectory