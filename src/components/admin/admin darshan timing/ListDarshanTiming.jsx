import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import axios from "axios";
import { Modal, Col, Row, Card } from "react-bootstrap";
import toast from "react-hot-toast";

function ListDarshanTiming() {
  const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL ;
  const [darshan,setDarshan] = useState([])
  const fetchDarshan = async () => {
    try {
      const response = await axios.get(darshan_URL);
      setDarshan(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect((()=>{
    fetchDarshan()
  }),[]);

  return (<>
    <div className='container-fluid'>
      <div className='row'>
        <h3 className="d-flex justify-content-center mt-4 mb-4"> Darshan Time </h3>
        {darshan && darshan.map((data, index) => (
        <Card>
          <Card.Body>
            <h3>{data.temple_name}</h3>         
            <hr/>   
            <ul>
              <Row className="justify">
                <Col className="col-md-6">                
              <h6>Summer Sessions</h6>
              {data.session.summer.map((sess) =>
                <p className="text-right">{sess.name} : {sess.time} </p>
              )}
              </Col>
              <Col className="col-md-6">
            <h6>Winter Sessions</h6>
              {data.session.winter.map((sess) => 
               <p className="text-right">{sess.name} : {sess.time} </p>
              )}
              </Col>
              </Row>
            </ul>

          </Card.Body>
        </Card>))}
        {/* <table className="table table-striped table-hover" >
          <thead className="fs-5">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Temple</th>
                <th scope="col">Season</th>
                <th scope="col">Opening</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {darshan && 
              darshan.map((data,index)=> (
                <tr key={index}>
                   <td scope="row">{index + 1}</td>
                   <td>{data.temple_name}</td>
                   <td>{data.session.summer[0].name}</td>
                   <td>{data.session.winter[0].name}</td>
                   <td>{data.session.summer[0].time}</td>  
                </tr>

              ))}
             

            </tbody>
          </table> */}



        </div>
    </div>
  </>)
}

export default ListDarshanTiming;
