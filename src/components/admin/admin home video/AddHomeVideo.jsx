import React from 'react'
import { Card, Form , Col, Row, Button} from 'react-bootstrap'

function AddHomeVideo() {
  return (<>

  <Card>
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
  </Card>

      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <h3 className="mt-3 text-center">Add Home Video</h3>
                  <div className="card-body">
                    <div className=" input-group mt-3 ">
                      <label
                        htmlFor="video"
                        className=" input-group-text col-3  fs-5 col-form-label"
                      >
                        Home Video
                      </label>
                      <input
                        type="file" id="video" name="video" accept="video/*"


                        className="col-9 form-control"
                        aria-labelledby="passwordHelpInline"
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button type="submit" className="btn btn-success"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

  </>)
}

export default AddHomeVideo