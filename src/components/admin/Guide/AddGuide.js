import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Form } from 'react-bootstrap';

function AddGuide() {
  const GUIDE_API = process.env.REACT_APP_GUIDES_URL;

  const [guideName, setGuideName] = useState("");             // name
  const [guideLocation, setGuideLocation] = useState("");     // location
  const [exp, setExp] = useState("");                         // experience
  const [locationTitle, setLocationTitle] = useState("");     // guide_location_title
  const [guideImage, setGuideImage] = useState(null);         // Image

  const handleGuide = async () => {
    
    // console.log("guideName", guideName);
    // console.log("guideLocation", guideLocation);
    // console.log("exp", exp );
    // console.log("locationTitle", locationTitle);
    // console.log("guideImage", guideImage);

    const formData = new FormData();
    formData.append('name', guideName);
    formData.append('location', guideLocation);
    formData.append('guide_location_title', locationTitle);
    formData.append('experience', exp);
    formData.append('my-images', guideImage);

    try {
      const response = await axios.post(GUIDE_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Guide added Successfully");
        setGuideName("");
        setGuideLocation("");
        setExp("");
        setLocationTitle("");
        setGuideImage(null);
      }
    }
    catch (error){
      console.log(error);
    }
  }


  return (<>
    <Card>
      <Card.Body>
        <h3>Add Guide Details</h3>
        <Form>
          <Form.Label className='my-1' htmlFor="guideName">Guide Name</Form.Label>
          <Form.Control  className='my-1' value={guideName} onChange={(e) => setGuideName(e.target.value)} id="guideName" type="text" placeholder="Guide Name"/> 
          <Form.Label className='my-1' htmlFor="guideImage">Guide Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setGuideImage(e.target.files[0])} id="guideImage" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="locationTitle">Guide Location Title</Form.Label>
          <Form.Control  className='my-1' value={locationTitle} onChange={(e) => setLocationTitle(e.target.value)} id="locationTitle" type="text" placeholder="Location for Guide" />
          <Form.Label className='my-1' htmlFor="guideLocation">Guide Location</Form.Label>
          <Form.Control  className='my-1' value={guideLocation} onChange={(e) => setGuideLocation(e.target.value)} id="guideLocation" type="text" placeholder="Guide's Location" />
          <Form.Label className='my-1' htmlFor="exp">Experience</Form.Label>
          <Form.Control  className='my-1' value={exp} onChange={(e) => setExp(e.target.value)} id="exp" type="text" placeholder="Guide's Experience" />
        </Form>
        <Button className='my-2' onClick={() => handleGuide()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddGuide;
