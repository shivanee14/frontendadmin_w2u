import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
function AddDarshanTiming() {
  const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL;
  const [templeName, setTempleName] = useState('Temple NAME IS SET'); // temple_name
   

  const initialState = {
    name: '',
    time: '',
  };
 
  const [sessionName, setSessionName] = useState("");  
  const [sessionTime, setSessionTime] = useState("");

  // const [summer, setSummer] = useState([{name: sessionName, time: sessionTime}]);
  const [summer, setSummer] = useState([]);
  const [winter, setWinter] = useState([]);

  console.log("summer", summer);

  const [session, setSession] = useState({summer, winter}); // session


console.log("Session", session);

  console.log("sessionName", sessionName);
  console.log("sessionTime", sessionTime);
  

  const [winterSessionCount, setWinterSessionCount ] = useState([]);
  console.log("winterSessionCount", winterSessionCount);

  // useEffect(() => {
  //   setSession({
  //     ...session,
  //     [e.target.name] : e.target.value
  //   });

  // }, [sessionName, sessionTime ])

  // useEffect(() => {

  //   setSummer({
  //     ...summer,

  //   })

  // }, [sessionName, sessionTime ]);


  function handleAddSession(){
    console.log("handleAddSession");
    setSummer((prevData) => [
      ...prevData,
      {
        name : sessionName,
        time : sessionTime,
      }

     
      // const xyz = [...prevData]
       
      // return {
        
      // }

    ]);
    // setSummer({
    //   ...summer,
    //   "name" : sessionName,
    //   "time" : sessionTime,
    // })

    // setSession(() => {
    //   "summer": summer,
    //   "winter": winter,
    // })
    setSession({summer, winter});
  }

  const handleClick = () => {
    // Add a new child component to the array
    const newIndex = winterSessionCount.length + 1;
   // const newChild = <AccordionItem21 key={newIndex} indexofcat={newIndex} handleRemove={handleRemove} setFormData={setFormData} />;
    setWinterSessionCount([...winterSessionCount, newIndex]);
  };

  return (<>  
    <h2>Add Darshan Timing Section</h2>
    <Card>
      <Card.Body>
        <h5>Summer</h5>
        <Form>
        {winterSessionCount.map((count) => 
        <><Row key={count}>
        <Col className='col-md-5'>
        <Form.Label>Session Name</Form.Label>
        <Form.Control name='name' type='text' onChange={(e) => setSessionName(e.target.value)} />
        </Col>
        <Col className='col-md-5' >        
        <Form.Label>Session Time</Form.Label>
        <Form.Control name='time' type='text' onChange={(e) => setSessionTime(e.target.value)}/>
        </Col>
        </Row>
        <Button className='my-1 btn btn-primary btn-sm' onClick={() => handleAddSession()}>Save Session</Button></>)}
        </Form>
        <Button className='my-1 btn btn-primary btn-sm' onClick={() => handleClick()}>Add Session</Button>
        
      
         

        <h5 className='my-2'>Winter</h5>
        <Form>
        <Row>
        <Col className='col-md-5'>
        <Form.Label>Session Name</Form.Label>
        <Form.Control type='text' onChange={(e) => setSessionName(e.target.value)} />
        </Col>
        <Col className='col-md-5' >        
        <Form.Label>Session Time</Form.Label>
        <Form.Control type='text' onChange={(e) => setSessionTime(e.target.value)}/>
        </Col>
        </Row>
        </Form>
        {/* <Button className='my-1 btn btn-primary btn-sm' onClick={() => setWinterSessionCount(winterSessionCount + 1)}>Add another Session</Button> */}
        

      </Card.Body>
    </Card>

    </>)
}

export default AddDarshanTiming