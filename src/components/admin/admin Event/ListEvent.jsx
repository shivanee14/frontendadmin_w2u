import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const ListEvent = () => {
  const event_URL = process.env.REACT_APP_EVENT_URL ;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(event_URL);
      setEvents(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${event_URL}/${id}`);
      fetchEvent();
    } catch (err) {
      console.error(err.response || "Error deleting event");
    }
  };

  // try {
  //   await axios.put(`${category_URL}/${id}`, { name: newName });
  //   fetchCategories();
  // } catch (err) {
  //   console.error(err.response || "Error updating category");
  // }

  const [eventid, seteventid] = useState("");
  const [eventName, seteventName] = useState("");
  const [evenImage, seteventImage] = useState(null);

  const handleEdit = async (id) => {
    setShow(true);
    seteventid(id);
  };
  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (eventid && eventName && evenImage) {
      const formData = new FormData();
      formData.append("name", eventName);
      formData.append("my-images", evenImage);

      try {
        const response = await axios.put(`${event_URL}/${eventid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          console.log(response)
         // setcatName("");
         // setcatImage(null);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <h3>Event Hendling</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Event Name</th>
            <th scope="col">Location</th>
            <th scope="col">Address</th>
            <th scope="col">Time</th>
            <th scope="col">Date</th>
            <th scope="col">Details</th>
            <th scope="col">Ticket_price</th>
            <th scope="col">Website_url</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {events &&
            events.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.Image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.Image}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deletecategory =
                          window.confirm("Delete category?");
                        if (deletecategory) {
                          handleDelete(data._id);
                        }
                      }}
                    >
                      <i className="bi bi-trash" />
                    </button>
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                      onClick={() => handleEdit(data._id)}
                    >
                      <i className="bi bi-pencil-square" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                className="form-control"
                id="categoryName"
                type="text"
                placeholder="Category Name"
                value={eventName}
                onChange={(e) => seteventName(e.target.value)}
              />
            </div>

            <div className="col-md-12 position-relative">
              <h6 className="my-2">Add Image</h6>
              <label




                className="w-100"
                htmlFor="my-images"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="form-control stretched-link"
                  type="file"
                  name="my-images"
                  id="image"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={(e) => seteventImage(e.target.files[0])}
                />
              </label>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListEvent;
