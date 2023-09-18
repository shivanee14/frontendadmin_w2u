import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { Modal, Card, Row, Col, Tooltip, OverlayTrigger, Button, Form, Table  } from "react-bootstrap";

function ListOnlineDirectory() {
  const DIRECTORY_API = process.env.REACT_APP_ONLINE_DIRECTORY_URL;
  const [directory, setDirectory] = useState([]);  // DATA

  const [file, setFile] = useState();  // Import and Export

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [title , setTitle] = useState("");                  // title
  const [desc, setDesc] = useState("");                     // description
  const [address, setAddress] = useState("");               // address
  const [latitude, setlatitude] = useState(null);             // latitude
  const [longitude, setlongitude] = useState(null);           // longitude
  const [mobile, setMobile] = useState("");                 // mobileNo
  const [email, setEmail] = useState("");                   // email
  const [url, setURL] = useState("");                       // websiteUrl
  const [logoimage, setLogoimage] = useState(null);         // my_images

const fileStyle = {
  display: "none",
}

const fetchDirectory =  async () => {
  try {
    const response = await axios.get(DIRECTORY_API);
    setDirectory(response.data);
  } 
  catch (err) {
    console.error(err.response.data.message || "Error fetching Directory Detail!!!");
  }   
}

useEffect(() => {
  fetchDirectory();
}, []);

const handleEdit = (id, title, mobile, email, address, url, desc, long, lat ) => {
  setShow(true);
  setEditId(id);
  setTitle(title);
  setMobile(mobile);
  setEmail(email); 
  setAddress(address);
  setURL(url); 
  setDesc(desc);
  setlongitude(long); 
  setlatitude(lat);
}

const ConfirmUpdate = async () => {
  if (title && address && desc && mobile && url && email && longitude && latitude) {
    
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
      const response = await axios.put(`${DIRECTORY_API}/${editId}`, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });         
      if (response.data) {
        toast.success("Directory details updated Successfully");
        fetchDirectory();
        setShow(false);
        setTitle("");
        setDesc("");
        setAddress("");
        setlatitude("");
        setlongitude("");
        setMobile("");
        setEmail("");
        setURL("");   
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
    await axios.delete(`${DIRECTORY_API}/${id}`);
    fetchDirectory();
  } catch (err) {
    console.error(err.response || "Error deleting Mandir details");
  }
};

// const ExportData = async() => {
//   const response = await axios.get(`${DIRECTORY_API}/export-csv`);
//   const dummyData = response.data;
//   const csvContent = `data:text/csv;charset=utf-8,${dummyData}`;
//   const encodedURI = encodeURI(csvContent);
//   window.open(encodedURI);
//   fetchDirectory();
// }  

// const ImportData = async () => {
//   document.getElementById('myFileInput').click();
// }

// useEffect(() => {
//   const formData = new FormData();
//   formData.append("file", file);
//   const response = axios.post(`${DIRECTORY_API}/import-csv`, formData);
//   setDirectory(response.data);
//  // wait();
// }, [file]);

return (<>
  <div style={{color: "#000000"}}>
    <h4 className='text-center mt-2 mb-4'>Online Directory</h4>
    {/* <div className='justify-content-end'>
    Import CSV
     <input type={"file"} id={"myFileInput"} style={fileStyle} accept={".csv"} 
      onChange={(e) => setFile(e.target.files[0])} />     
      <Button onClick={() => ImportData()} className='btn btn-sm mx-1'>Upload CSV Data</Button> 
    Export CSV Data 
      <Button onClick={() => ExportData()} className='btn btn-sm mx-1'>Download CSV Data</Button>
    </div> */}

    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {directory && directory.map((data, index) => (
        <tr key={data._id}>
          <td>{index + 1 } {data.title}</td>
          <td> <div style={{ height: "50px" }}>
                    <a href={`${data.logoimage}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.logoimage}`}
                        alt=""
                      />
                    </a>
                  </div></td>
          <td>{data.mobileNo}</td>
          <td>{data.email}</td>
          <td>{data.address.text}</td>
          <td>{data.websiteUrl}</td>
          <td>
            <Button data-bs-toggle="tooltip" data-bs-placement="top" variant='outline-primary' className="btn btn-light btn-round me-1" onClick={() => {
              const deletecategory = window.confirm("Delete Guide?");
                if (deletecategory) { handleDelete(data._id); }}}>
                  <i className="bi bi-trash" />
            </Button>
          </td>
          <td>
            <Button className="btn btn-light btn-round me-1" data-bs-toggle="tooltip" data-bs-placement="top" variant='outline-primary'
              onClick={() => handleEdit(data._id, data.title, data.mobileNo, data.email, data.address.text, data.websiteUrl, 
                data.description, 
                data.address.location.coordinates[0], data.address.location.coordinates[1] )}>
                <i className="bi bi-pencil-square" />
            </Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>

    {/* <Row style={{color: "#2B3542",  fontWeight: "bold"}} className="mt-2 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col  className="d-flex flex-column mb-lg-0 pe-1 d-flex ">
          <div  className="text-md cursor-pointer sort">Title</div>
        </Col>
        <Col className="d-flex flex-column pe-1">
          <div className="text-md cursor-pointer sort">Mobile</div>
        </Col>
        <Col className="d-flex flex-column pe-1">
          <div className="text-md cursor-pointer sort">Email</div>
        </Col>
        <Col className="d-flex flex-column pe-1">
          <div className="text-md cursor-pointer sort">Address</div>
        </Col>
        <Col className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Website</div>
        </Col>
        <Col  className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className="text-md cursor-pointer sort">Actions</div>
        </Col>
    </Row> */}

      {/* {directory && directory.map((data, index) => (
        <Card key={data._id} className='my-2 '>
          <Card.Body>
            <Row className="g-0 h-100 align-content-center">
              <Col xs="1" lg="1"  className="d-flex flex-column mb-2 mb-lg-0 order-1 order-lg-1  ">
                <div  className="text-muted text-small d-lg-none">Title</div>
                <div className="text-alternate">{index + 1 } {data.title}</div>
              </Col>
              <Col col="auto" className="d-flex flex-column mb-2 mb-lg-0 order-2 order-lg-2">
                <div  className="text-muted text-small d-lg-none">Mobile No</div>
                <div className="text-alternate">{data.mobileNo}</div>
              </Col>
              <Col col="auto" className="d-flex flex-column  mb-2 mb-lg-0 order-3 order-lg-3">
                <div  className="text-muted text-small d-lg-none">Email</div>
                <div className="text-alternate">{data.email}</div>
              </Col>
              <Col   col="auto" className="d-flex flex-column mb-2 mb-lg-0 order-4 order-lg-4 ">
                <div  className="text-muted text-small d-lg-none">Address</div>
                <div className="text-alternate">{data.address.text}</div>
              </Col>
              <Col col="auto"  className="d-flex flex-column  mb-2 mb-lg-0 order-4 order-lg-4  ">
                <div  className="text-muted text-small d-lg-none">Website</div>
                <div className="text-alternate">{data.websiteUrl}</div>
              </Col>
              <Col col="auto"  className="d-flex flex-column mb-2 mb-lg-0 order-4 order-lg-4  ">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => {
                  const deletecategory = window.confirm("Delete Guide?");
                  if (deletecategory) { handleDelete(data._id); }
                  }}>
                    <i className="bi bi-trash" />
                  </Button>
              </Col>
              <Col xs="1" lg="1" className="d-flex flex-column mb-2 mb-lg-0 order-4 order-lg-4  ">
                <Button variant='outline-primary' className='me-1'
                  onClick={() => handleEdit(data._id, data.name, data.address, data.location, data.details)}>
                    <i className="bi bi-pencil-square" />
                  </Button>
              </Col>
              <hr />
            </Row>
          </Card.Body>
        </Card>
      ))} */}

  <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
       <Modal.Title>Edit Online Directory</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
          <Form.Label className='my-1' htmlFor="title">Title</Form.Label>
          <Form.Control  className='my-1' value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" placeholder="Title"/> 
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" type="text" placeholder="Description" />
          <Form.Label className='my-1' htmlFor="address">Address</Form.Label>
          <Form.Control  className='my-1' value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Address" />
          <Form.Label className='my-1' htmlFor="longitude">Longitude</Form.Label>
          <Form.Control  className='my-1' value={longitude} onChange={(e) => setlongitude(e.target.value)} id="longitude" type="number" placeholder="Longitude" />
          <Form.Label className='my-1' htmlFor="latitude">Latitude</Form.Label>
          <Form.Control  className='my-1' value={latitude} onChange={(e) => setlatitude(e.target.value)} id="latitude"  type="number" placeholder="Latitude" />
          <Form.Label className='my-1' htmlFor="email">Email</Form.Label>
          <Form.Control  className='my-1' value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder="Email" />
          <Form.Label className='my-1' htmlFor="mobile">Mobile No.</Form.Label>
          <Form.Control  className='my-1' value={mobile} onChange={(e) => setMobile(e.target.value)} id="mobile" type="number" placeholder="Mobile No." />
          <Form.Label className='my-1' htmlFor="url">Website URL</Form.Label>
          <Form.Control  className='my-1' value={url} onChange={(e) => setURL(e.target.value)} id="url" type="text" placeholder="Website URL" />
          {/* <Form.Label className='my-1' htmlFor="logoimage">Logo Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setLogoimage(e.target.files[0])} id="logoimage" accept="image/gif, image/jpeg, image/png" type="file"  /> */}
        </Form>   
      <Button className='mx-1' onClick={() => ConfirmUpdate()}>Save</Button>
      <Button className='mx-1' onClick={() => setShow(false)}>Close</Button>
    </Modal.Body>
  </Modal>
  </div>
</>)
}

export default ListOnlineDirectory;