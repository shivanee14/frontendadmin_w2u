import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
function AddDarshanTiming() {
  const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL;
  const [templeName, setTempleName] = useState(''); // temple_name 
  const [formData, setFormData] = useState({ summer: [], winter: [] });  // session
  
  // Summer
  const handleSummerSession = (index, field, value) => {
    setFormData((prevFormData) => {
      const summer = [...prevFormData.summer];
      summer[index] = {
        ...summer[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        summer,
      };
    });
  };
  const handleAddSummerSession = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      summer: [...prevFormData.summer, { name: '', time: '' }],
    }));
  };
  const handleRemoveSummerSession = (index) => {
    const summer = [...formData.summer];
    summer.splice(index, 1);
    setFormData({ ...formData, summer })
  };

  // Winter
  const handleWinterSession = (index, field, value) => {
    setFormData((prevFormData) => {
      const winter = [...prevFormData.winter];
      winter[index] = {
        ...winter[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        winter,
      };
    });
  };
  const handleAddWinterSession = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      winter: [...prevFormData.winter, { name: '', time: '' }],
    }));
  };
  const handleRemoveWinterSession = (index) => {
    const winter = [...formData.winter];
    winter.splice(index, 1);
    setFormData({ ...formData, winter })
  };


  const handleDataSend = async (e) => {
    const formdata1 = {
      temple_name: templeName,
      session: formData
    }
    console.log(formdata1);

    try {
      const response = await axios.post(darshan_URL, formdata1);
      if (response) {
        toast.success("Added Darshan timing Successfully!");      
        console.log(response);
      }
    } catch (error) {
      console.error("Error in adding DARSHAN time: ", error);
    }



  }

  return (<>
    <h2>Add Darshan Timing Section</h2>
    <Card>
      <Card.Body>
        <Form.Label>Temple Name</Form.Label>
        <Form.Control name='templeName' type='text' onChange={(e) => setTempleName(e.target.value)}/>
        <h3 className=' my-2'>Summer</h3>
        <Form>
          {formData?.summer.map((count, index) =>
            <div key={index}>
              <Row className='mb-2'>
                <Col className='col-md-5'>
                  <Form.Label className='mx-0 my-0 px-0 py-0'>Session Name</Form.Label>
                  <Form.Control name='name' type='text' onChange={(e) => handleSummerSession(index, 'name', e.target.value)} />
                </Col>
                <Col className='col-md-5' >
                  <Form.Label className='mx-0 my-0 px-0 py-0'> Session Time</Form.Label>
                  <Form.Control name='time' type='text' value={count.time} onChange={(e) => handleSummerSession(index, 'time', e.target.value)} />
                </Col>
                <Col className='col-md-1 mt-3 my-0 px-0 py-0'>
                  <Button variant="danger" className="my-1 btn btn-danger btn-sm" size="sm" onClick={() => handleRemoveSummerSession(index)}>
                    x 
                  </Button>
                </Col>
              </Row>              
            </div>
          )}
          <Button variant="primary" size="sm" className={formData.length ? '' : 'my-1 btn btn-primary btn-sm'} onClick={handleAddSummerSession}>
            Add Session
          </Button>
          
        </Form>
        <h3 className=' my-2'>Winter</h3>
        <Form>
          {formData?.winter.map((count, index) =>
            <div key={index}>
              <Row className='mb-2'>
                <Col className='col-md-5'>
                  <Form.Label className='mx-0 my-0 px-0 py-0'>Session Name</Form.Label>
                  <Form.Control name='name' type='text' value={count.name || ''} onChange={(e) => handleWinterSession(index, 'name', e.target.value)} />
                </Col>
                <Col className='col-md-5' >
                  <Form.Label className='mx-0 my-0 px-0 py-0'>Session Time</Form.Label>
                  <Form.Control name='time' type='text' value={count.time} onChange={(e) => handleWinterSession(index, 'time', e.target.value)} />
                </Col>
                <Col className='col-md-1 mt-3 my-0 px-0 py-0' >
                  <Button variant="danger" className="my-1 btn btn-danger btn-sm" size="sm"  onClick={() => handleRemoveWinterSession(index)}>
                    x 
                  </Button>
              </Col>
              </Row>
            </div>
          )}
          <Button variant="primary" size="sm" className={formData.length ? '' : 'my-1 btn btn-primary btn-sm'} onClick={handleAddWinterSession}>
            Add Session
          </Button>          
        </Form>
        <Button className='my-1 btn btn-success btn-sm' onClick={() => handleDataSend()}>Save Sessions</Button>        
      </Card.Body>
    </Card>
  </>)
}

export default AddDarshanTiming;
