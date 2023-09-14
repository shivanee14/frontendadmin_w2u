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
      console.log(err.response.data.message || "Error fetching EVENT");
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

  const [eventid, seteventid] = useState("");
  const [eventName, seteventName] = useState("");
  const [eventImage, seteventImage] = useState(null);
  const [eventLocation, seteventLocation] = useState("");
  const [eventAddress, seteventAddress] =useState("");
  const [eventDate, seteventDate] = useState("");
  const [eventTime, seteventTime] = useState("");
  const [eventDetail ,seteventDetail] = useState("");
  const [eventTicket_price, seteventTicket_price] = useState("");
  const [eventWeb_url, seteventWeb_url] = useState("");

  const handleEdit = async (id,name,loc,add,date,time,detail,price,wurl) => {
    setShow(true);
    seteventid(id);
    seteventName(name);
    seteventLocation(loc);
    seteventAddress(add);
    // seteventDate(date);
    seteventTime(time);
    seteventDetail(detail);
    seteventTicket_price(price);
    seteventWeb_url(wurl);
  };

  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (eventid && eventName && eventImage) {
      const formData = new FormData();
      formData.append("name", eventName);
      formData.append("my-images", eventImage);
      formData.append('location', eventLocation);
      formData.append('address', eventAddress);
      formData.append('date', eventDate);
      formData.append('time', eventTime);
      formData.append('details', eventDetail);
      formData.append('ticket_price', eventTicket_price);
      formData.append('website_url', eventWeb_url);

      try {
        const response = await axios.put(`${event_URL}/${eventid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Event added Successfully");
          fetchEvent();
          setShow(false);
          e.target.reset();
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  return (<>
    <h4 className='text-center mt-2 mb-4'>List of Events</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Event Name</th>            
            <th scope="col">Event Image</th>
            <th scope="col">Address</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Details</th>
            <th scope="col">Ticket Price</th>
            <th scope="col">Website URL</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {events &&
            events.map((data, index) => (
              <tr key={index}>
                {/* <td scope="row">{index + 1}</td> */}

                <td>{index + 1}{data.name}</td>
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
                <td>{data.address}</td>
                <td>{data.location}</td>
                <td>{data.date}</td>
                <td>{data.time}</td> 
                <td>{data.details}</td>
                <td>{data.ticket_price}</td>
                <td>{data.website_url}</td>

                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deletecategory =
                          window.confirm("Delete eventList?");
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
                      onClick={() => handleEdit(data._id,data.name,data.location,data.address,data.time,data.details,data.ticket_price,data.website_url)}
                    >
                      <i className="bi bi-pencil-square" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

  <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Event</Modal.Title>
    </Modal.Header>
    <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">
             Event Name
              </label>
              <input
                className="form-control"
                id="eventName"
                type="text"
                placeholder="Event Name"
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

            <div className="mb-3">
              <label htmlFor="eventlocation" className="form-label">
             Event location
              </label>
              <input
                className="form-control"
                id="eventlocation"
                type="text"
                placeholder="Category Name"
                value={eventLocation}
                onChange={(e) => seteventLocation(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventaddress" className="form-label">
             Event Address
              </label>
              <input
                className="form-control"
                id="eventaddress"
                type="text"
                placeholder="Event Address"
                value={eventAddress}
                onChange={(e) => seteventAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventdate" className="form-label">
             Event Date
              </label>
              <input
                className="form-control"
                id="eventdate"
                type="datetime-local"
                placeholder="Event Address"
                value={eventDate}
                onChange={(e) => seteventDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="eventtime" className="form-label">
             Event time
              </label>
              <input
                className="form-control"
                id="eventtime"
                type="text"
                placeholder="Event time"
                value={eventTime}
                onChange={(e) => seteventTime(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventdetail" className="form-label">
             Event detail
              </label>
              <input
                className="form-control"
                id="eventdetail"
                type="text"
                placeholder="Event detail"
                value={eventDetail}
                onChange={(e) => seteventDetail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="eventprice" className="form-label">
             Event Ticket_price
              </label>
              <input
                className="form-control"
                id="eventprice"
                type="number"
                placeholder="Event Ticket_price"
                value={eventTicket_price}
                onChange={(e) => seteventTicket_price(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="eventweb" className="form-label">
             Event Web_url
              </label>
              <input
                className="form-control"
                id="eventweb"
                type="text"
                placeholder="Event Web_url"
                value={eventWeb_url}
                onChange={(e) => seteventWeb_url(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
    </Modal.Body>
  </Modal>
  </>);
};

export default ListEvent;
