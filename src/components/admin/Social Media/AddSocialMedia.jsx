import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddSocialMedia() {
  const SOCIAL_MEDIA_API = process.env.REACT_APP_SOCIAL_MEDIA_URL;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  
  const handleSocialMedia = async (e) => {
   // e.preventDefault();
    console.log("title", title);
    console.log("my-images", image);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('my-images', image);

    try { 
        const response = await axios.post(SOCIAL_MEDIA_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
      toast.success("Social Media post added Successfully");
      setTitle("");
      setImage(null)
      console.log(response);

      }
    }
    catch (error){
      console.log(error);
    }
  }

  return (<>    
    <Card>
      <Card.Body>
        <h3>Social Media</h3>
        <Form>
          <Form.Label htmlFor="image">Title</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} id="image" type="text" placeholder="Name"/> 
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
        </Form>
        <Button className='my-2' onClick={() => handleSocialMedia()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddSocialMedia;
