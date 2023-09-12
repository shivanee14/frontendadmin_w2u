import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddShopping() {
  const SHOPPING_API =  process.env.REACT_APP_SHOPPING_URL;
  
  const [shoppingName, setShoppingName] = useState("");      // name
  const [slug, setSlug] = useState("");                      // slug
  const [location, setLocation] = useState("");              // location
  const [details, setDetails] = useState("");                // details
  const [tag, setTag] = useState("");                        // tag
  const [image, setImage] = useState(null);                  // my-images

  const handleShopping = async () => { 
    // console.log('name', shoppingName);
    // console.log('slug', slug);
    // console.log('location', location);
    // console.log('details', details);
    // console.log('my-images', image);

    const formData = new FormData();
    formData.append('name', shoppingName);
    formData.append('slug', slug);
    formData.append('location', location);
    formData.append('details', details);
    formData.append('tag', tag);
    formData.append('my-images', image);
    

    try {
      const response = await axios.post(SHOPPING_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Shopping Details added Successfully");
        // console.log("DATA RESPONSE", response.data);
        setShoppingName("");
        setSlug("");
        setLocation("");
        setDetails("");
        setTag("");
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
        <h3>Add Shopping Details</h3>
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
        <Button className='my-2' onClick={() => handleShopping()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddShopping;
