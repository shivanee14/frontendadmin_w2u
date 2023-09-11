import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";



const AddEvent = () => {

    const event_URL = process.env.REACT_APP_EVENT_URL ;

  const [event_image, setEvent_image] = useState(null);
  const [event_Name, setEvent_Name] = useState('');
  const [event_location, setEvent_location] = useState('');
  const [event_address, setEvent_address] =  useState('');
  const [event_time, setEvent_time] =  useState('');
  const [event_date, setEvent_date] =  useState('');
  const [event_detail, setEvent_detail] =  useState('');
  const [event_ticket_price, setEvent_ticket_price] =  useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (event_image && event_Name && event_location && event_address && event_time && event_date && event_detail && event_ticket_price) {

      const formData = new FormData();
      formData.append('my-images', event_image);
      formData.append('name', event_Name);
      formData.append('name', event_location);
      formData.append('name', event_address);
      formData.append('name', event_time);
      formData.append('name', event_date);
      formData.append('name', event_detail);
      formData.append('name', event_ticket_price);

      try {
        const response = await axios.post(event_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          setEvent_Name("")
          setEvent_image(null)
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");

      }
    }
    else {
      toast.error("All fields are mandatory.");
    }
  }
  return (
    <>
     
      <main>
        <section>
          <div className="container-fluid">
            <div className="row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <div className="card-header border-bottom p-3">
                    <h5 className="card-header-title mb-0">Add Event</h5>
                  </div>

                  <div className="card-body">
                    <form onSubmit={handleSubmit}>

                    <div className="col-md-12 position-relative">
                        <h6 className="my-2">Add Image</h6>
                        <label className="w-100"
                          htmlFor="image"

                          style={{ cursor: "pointer" }}>
                          <input
                            className="form-control stretched-link"
                            type="file"
                            name="my-images"
                            id="image"
                            accept="image/gif, image/jpeg, image/png"
                            onChange={(e) => setEvent_image(e.target.files[0])}
                          />
                        </label>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="eventName" className="form-label" >Event Name</label>
                        <input
                          className="form-control"
                          id="eventName"
                          type="text"
                          placeholder="Event Name"
                          value={event_Name}
                          onChange={(e) => setEvent_Name(e.target.value)}
                        />
                      </div>
                  
                      <div className="mb-3">
                        <label htmlFor="location" className="form-label" >Event location</label>
                        <input
                          className="form-control"
                          id="location"
                          type="text"
                          placeholder="Event location"
                          value={event_location}
                          onChange={(e) => setEvent_location(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="form-label" >Event address</label>
                        <input
                          className="form-control"
                          id="address"
                          type="text"
                          placeholder="Event address"
                          value={event_address}
                          onChange={(e) => setEvent_address(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="time" className="form-label" >Event time</label>
                        <input
                          className="form-control"
                          id="time"
                          type="text"
                          placeholder="Event time"
                          value={event_time}
                          onChange={(e) => setEvent_time(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="date" className="form-label" >Event date</label>
                        <input
                          className="form-control"
                          id="date"
                          type="text"
                          placeholder="Event date"
                          value={event_date}
                          onChange={(e) => setEvent_date(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="detail" className="form-label" >Event detail</label>
                        <input
                          className="form-control"
                          id="detail"
                          type="text"
                          placeholder="Event Detail"
                          value={event_detail}
                          onChange={(e) => setEvent_detail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="ticket" className="form-label" >Event ticket</label>
                        <input
                          className="form-control"
                          id="ticket"
                          type="text"
                          placeholder="ticket_price"
                          value={event_ticket_price}
                          onChange={(e) => setEvent_ticket_price(e.target.value)}
                        />
                      </div>       

                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="submit"
                          className="btn btn-outline-success"
                        >
                          Create Event
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
    </>
  );

};

export default AddEvent;
