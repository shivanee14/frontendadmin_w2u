import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form, Table  } from "react-bootstrap";


function ListMandir() {
    const MANDIR_API = process.env.REACT_APP_MANDIR_URL ;
    const [mandir, setMandir] = useState([]);
    const [file, setFile] = useState();  // Import and Export

    const fileStyle = {
      display: "none",
    }
  
    const fetchMandir =  async () => {
      try {
        const response = await axios.get(MANDIR_API);
        setMandir(response.data);
      } 
      catch (err) {
        console.error(err.response.data.message || "Error fetching Food Detail!!!");
      }   
    }
  
    useEffect(() => {
      fetchMandir();
    }, []);
  
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [mandirName, setMandirName] = useState("");      // name
  const [address, setAddress] = useState("");            // address
  const [location, setLocation] = useState("");          // location
  const [details, setDetails] = useState("");            // details
  const [image, setImage] = useState(null);              // my-images

  const handleEdit = (id, name, add, loc, detail) => {
    setShow(true);
    setEditId(id);
    setMandirName(name);
    setAddress(add);
    setLocation(loc);
    setDetails(detail);
  }

  const ConfirmUpdate = async () => {
    if (mandirName && address && location && image && details) {
      
      const formData = new FormData();
      formData.append('name', mandirName);
      formData.append('address', address);
      formData.append('location', location);
      formData.append('details', details);
      formData.append('my-images', image); 

      try {
        const response = await axios.put(`${MANDIR_API}/${editId}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Mandir details updated Successfully");
          fetchMandir();
          setShow(false);
          setMandirName("");
          setAddress("");
          setLocation("");
          setDetails("");
          setImage(null);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${MANDIR_API}/${id}`);
      fetchMandir();
    } catch (err) {
      console.error(err.response || "Error deleting Mandir details");
    }
  };

    // const [ idea, setIdea ] = useState("");
    // useEffect(() => {
    //   fetchMandir();
    // }, [idea]);

    // const wait = async () => {
    //   await fetchMandir();
    //   setIdea("2");
    // }

    const ExportData = async() => {
      const response = await axios.get(`${MANDIR_API}/export-csv`);
      const dummyData = response.data;
      const csvContent = `data:text/csv;charset=utf-8,${dummyData}`;
      const encodedURI = encodeURI(csvContent);
      window.open(encodedURI);
      fetchMandir();
    }   

    const ImportData = async () => {
      document.getElementById('myFileInput').click();
    }

    useEffect(() => {

      const formData = new FormData();
      formData.append("file", file);
      const response = axios.post(`${MANDIR_API}/import-csv`, formData);
      setMandir(response.data);
     // wait();
    }, [file]);

  return (<>
    <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>List of Mandirs</h4>
    <div className='justify-content-end'>
    {/* Import CSV */}
    <input type={"file"} id={"myFileInput"} style={fileStyle} accept={".csv"} 
      onChange={(e) => setFile(e.target.files[0])} />     
      <Button onClick={() => ImportData()} className='btn btn-sm mx-1'>Upload CSV Data</Button>
    {/* Export CSV Data  */}
      <Button onClick={() => ExportData()} className='btn btn-sm mx-1'>Download CSV Data</Button>
    </div>

  
    <Table>
     <thead>
      <th scope='col'>Index </th>
      <th scope='col'>Mandir Name</th>
      <th scope='col'>Image</th>
      <th scope='col'>Details</th>
      <th scope='col'>Location</th>
      <th scope='col'>Address</th>
      <th scope='col'>Actions</th>
      
     </thead>
      <tbody>
      {mandir && mandir.map((data, index) => (
        <tr key={index}>
          <td>{index+1}</td>
         <td>{data.name}</td>
         <td><img src={data.Image} style={{with:"100px",height:"100px"}}></img></td>
         <td>{data.details}</td>
         <td>{data.location}</td>
         <td>{data.address}</td>
         <td>
         <Button variant='outline-primary' className='me-1'
              onClick={() => {
                   const deletecategory = window.confirm("Delete Guide?");
                   if (deletecategory) { handleDelete(data._id); }
                   }}>
                     <i className="bi bi-trash" />
                   </Button>

                   <Button variant='outline-primary' className='me-1'
                 onClick={() => handleEdit(data._id, data.name, data.address, data.location, data.details)}>
                     <i className="bi bi-pencil-square" />
                 </Button>
         </td>

        </tr>
        // <Card key={data._id} className='my-2 '>
        //   <Card.Body>
        //     <Row className="g-0 h-100 align-content-center">
        //       <Col xs="6" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
        //         <div  className="text-muted text-small d-lg-none">Index No.</div>
        //         <div className="text-alternate">{index + 1}</div>
        //       </Col>
        //       <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 align-items-lg-center">
        //         <div  className="text-muted text-small d-lg-none">Mandir Name</div>
        //         <div className="text-alternate">{data.name}</div>
        //       </Col>
        //       <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-2 order-lg-2 align-items-lg-center">
        //         <div  className="text-muted text-small d-lg-none">Details</div>
        //         <div className="text-alternate">{data.details}</div>
        //       </Col>
        //       <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-3 align-items-lg-center">
        //         <div  className="text-muted text-small d-lg-none">Location</div>
        //         <div className="text-alternate">{data.location}</div>
        //       </Col>
        //       <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
        //         <div  className="text-muted text-small d-lg-none">Address</div>
        //         <div className="text-alternate">{data.address}</div>
        //       </Col>
        //       <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
        //         <Button variant='outline-primary' className='me-1'
        //           onClick={() => {
        //           const deletecategory = window.confirm("Delete Guide?");
        //           if (deletecategory) { handleDelete(data._id); }
        //           }}>
        //             <i className="bi bi-trash" />
        //           </Button>
        //       </Col>
        //       <Col xs="1" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4 align-items-lg-center">
        //         <Button variant='outline-primary' className='me-1'
        //           onClick={() => handleEdit(data._id, data.name, data.address, data.location, data.details)}>
        //             <i className="bi bi-pencil-square" />
        //           </Button>
        //       </Col>
        //       <hr />
        //     </Row>
        //   </Card.Body>
        // </Card>
        
      ))}
      </tbody>
    </Table>
     

  <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
       <Modal.Title>Edit Guide</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
      <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
      <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>
    </Modal.Body>
  </Modal>
    </div>
  </>)
}

export default ListMandir;
