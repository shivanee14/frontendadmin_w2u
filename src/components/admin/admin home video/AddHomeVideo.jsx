import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { Card, Form , Col, Row, Button} from 'react-bootstrap'

function AddHomeVideo() {
  const HOME_VIDEO = process.env.REACT_APP_INDEX_VIDEO_URL;
  {/* title: req.body.title,
      description: req.body.description,
      url: req.file ? req.file.path : null,
      thumbnailUrl: req.body.thumbnailUrl,
      uploader: req.user.id, */}

      const [homeTitle, setHomeTitle] = useState('');
      const [homeImage, setHomeImage] = useState(null);


    const handleSubmit = async(e)=>{
      e.PreventDefault()

      if(homeTitle && homeImage ){
     const formData = new FormData();
       formData.append("title",homeTitle);
       formData.append("url",homeImage);
       
       try{
       const response = await axios.post(HOME_VIDEO,formData,{
         
        headers:{

            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
       })
       if (response.data) {
        toast.success("HomeImage added successfully");
        e.target.reset();
        setHomeTitle("")
        setHomeImage(null)
      }
       }catch (error) {
        console.error(error.response || "Something went wrong");

      }
    } 
    else {
      toast.error("All fields are mandatory.");
    }
  
  }

  return (<>
  {/* <Card>
    <div className='container-fluid'>
    <h3 className='my-4 text-center'>Add Home Video</h3>
    <Card.Body>
      <Row >
      <Col className='col-lg-2' />
      <Col className='justify-content-center  col-lg-8'>
      <Form>
        <Form.Label className='fs-5'>
          Home Page Video
        </Form.Label>
        <Form.Control type="file" id="video" name="video" accept="video/*" />
      </Form>
      <Button className='justify-content-end  d-flex my-2 '> Save </Button>
      </Col>
      <Col className='col-lg-2' />
      </Row>
    </Card.Body>
    </div>
  </Card> */}

      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                
                  <h3 className="mt-3 text-center">Add Home Images</h3>
                  <div className="card-body">
                    <form>
                  <div className="mt-3">
                      <label
                        htmlFor="title"
                        className="col-3  fs-5 col-form-label"
                      >
                        Home Image Title
                      </label>
                      <input
                        type="text" id="title" 
                        className="col-9 form-control"
                        aria-labelledby="passwordHelpInline"
                        value={homeTitle}
                        onChange={(e) => setHomeTitle(e.target.value)}
                      />
                      {/* accept="video/*" */}
                    </div>
                    <div className="mt-3">
                      <label
                        htmlFor="video"
                        className="col-3  fs-5 col-form-label"
                      >
                        Home Image
                      </label>
                      <input
                        type="file" id="video" name="homeImage"
                        className="col-9 form-control"
                        aria-labelledby="passwordHelpInline"
                        onChange={(e) => setHomeImage(e.target.files[0])}
                      />
                      {/* accept="video/*" */}
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button type="submit" className="btn btn-success"
                      onClick={() => handleSubmit()}
                      >
                        Submit
                      </button>
                    </div>
                    </form>
                  </div>
                </div>
                
              </div>
              
            </div>
  
          </div>
          
        </section>
      </main>

  </>)
}

export default AddHomeVideo;
