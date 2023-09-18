import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";



const AddEvent = () => {

    const event_URL = process.env.REACT_APP_EVENT_URL ;

  const [event_image, setEvent_image] = useState(null);
  const [event_Name, setEvent_Name] = useState('');
  const [event_slug, setEvent_slug] = useState(''); 
  const [event_DetailName, setEvent_DetailName] = useState('');
  const [event_location, setEvent_location] = useState('');
  const [event_address, setEvent_address] =  useState('');
  const [event_StartTime, setEvent_StartTime] =  useState('');
  const [event_EndTime, setEvent_EndTime] =  useState('');
  const [start_date, setStart_date] =  useState('');
  const [end_date, setEnd_date] =  useState('');
  const [event_ticket_information, setEvent_ticket_information] =  useState('');
  const [event_web_url, setEvent_web_url] =  useState('');
  const [event_Exhibitions, setEvent_Exhibitions] =  useState('');
  const [Organizedby_Name, setOrganizedby_Name] =  useState('');
  const [Organizedby_Address, setOrganizedby_Address] =  useState('');
  const [Organizedby_Location, setOrganizedby_Location] =  useState('');
  const [Organizedby_mobileno, setOrganizedby_mobileno] =  useState('');
  const [Organizedby_Email, setOrganizedby_Email] =  useState('');
  const [Organizedby_WebUrl, setOrganizedby_WebUrl] =  useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (event_image && event_Name && event_location && event_address && event_time && event_date && event_detail && event_ticket_price) {

      const formData = new FormData();
      formData.append('name', event_Name);
      formData.append('slug', event_slug);
      formData.append(' Detail_Name_of_Event', event_DetailName);
      formData.append('my-images', event_image);
      formData.append(' event_Location', event_location);
      formData.append(' Venue_Address', event_address);
      formData.append('start_time', event_StartTime);
      formData.append('end_time', event_EndTime)
      formData.append('start_date', start_date);
      formData.append('end_date', end_date);
      formData.append('Ticket_Information', event_ticket_information);
      formData.append('event_Website_url', event_web_url);
      formData.append(' EXPO_AND_EXHIBITIONS_details', event_Exhibitions);
      formData.append('   ORGANIZED_by_Name', Organizedby_Name);
      formData.append('  Organized_HomeAddress', Organizedby_Address);
      formData.append(' Organized_Location',Organizedby_Location);
      formData.append('  mobile_no', Organizedby_mobileno);
      formData.append('  Email',Organizedby_Email);
      formData.append('  ORGANIZED_by_Website_url', Organizedby_WebUrl);

      try {
        const response = await axios.post(event_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        // if (response.data) {
        //   toast.success("category added successfully");
        //   e.target.reset();
        //   setEvent_Name("")
        //   setEvent_image(null)
        // }
      } catch (error) {
        console.error(error.response || "Something went wrong");

    //   }
    // }
    // else {
    //   toast.error("All fields are mandatory.");
    }
  }
  return (<>
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
                        <label htmlFor="location" className="form-label" >Slug</label>
                        <input
                          className="form-control"
                          id="slug"
                          type="text"
                          placeholder="Slug"
                          value={event_slug}
                          onChange={(e) => setEvent_slug(e.target.value)}
                        />
                      </div>
                  
                      <div className="mb-3">
                        <label htmlFor="detailname" className="form-label" >DetailName of Event</label>
                        <input
                          className="form-control"
                          id="detailname"
                          type="text"
                          placeholder="DetailName of Event"
                          value={event_DetailName}
                          onChange={(e) => setEvent_DetailName(e.target.value)}
                        />
                      </div>
                    
                      <div className="mb-3">
                        <label htmlFor="location" className="form-label" >Event Location</label>
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
                        <label htmlFor="address" className="form-label" >Event Address</label>
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
                        <label htmlFor="sdate" className="form-label" >Start Date of End </label>
                        <input
                          className="form-control"
                          id="sdate"
                          type="datetime-local"
                          
                          placeholder="Start date"
                          value={event_StartTime}
                          onChange={(e) => setEvent_StartTime(e.target.value)}
                        />
                      </div>
 
                      <div className="mb-3">
                        <label htmlFor="edate" className="form-label" >Start Date of End </label>
                        <input
                          className="form-control"
                          id="edate"
                          type="datetime-local"
                          
                          placeholder="Start date"
                          value={event_EndTime}
                          onChange={(e) => setEvent_EndTime(e.target.value)}
                        />
                      </div>
      

                      <div className="mb-3">
                        <label htmlFor="ticket" className="form-label" >Event Ticket</label>
                        <input
                          className="form-control"
                          id="ticket"
                          type="text"
                          placeholder="ticket_info"
                          value={event_ticket_information}
                          onChange={(e) => setEvent_ticket_information(e.target.value)}
                        />
                      </div>       

                      <div className="mb-3">
                        <label htmlFor="web" className="form-label" >Event Web URL</label>
                        <input
                          className="form-control"
                          id="web"
                          type="text"
                          placeholder="Web_url"
                          value={event_web_url}
                          onChange={(e) => setEvent_web_url(e.target.value)}
                        />
                      </div>   

                      <div className="mb-3">
                        <label htmlFor="exhibitions" className="form-label" >Events Exhibition</label>
                        <input
                          className="form-control"
                          id="exhibitions"
                          type="text"
                          placeholder="EventExhibitions"
                          value={event_Exhibitions}
                          onChange={(e) => setEvent_Exhibitions(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="organizedby_Name" className="form-label" >Organizers Name </label>
                        <input
                          className="form-control"
                          id="organizedby_Name"
                          type="text"
                          placeholder="Organizers Name"
                          value={Organizedby_Name}
                          onChange={(e) => setOrganizedby_Name(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="orgbyaddress" className="form-label" >Organizers Address</label>
                        <input
                          className="form-control"
                          id="orgbyaddress"
                          type="text"
                          placeholder="OrganizedbyAddress"
                          value={Organizedby_Address}
                          onChange={(e) => setOrganizedby_Address(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="web" className="form-label" >Location of Organizers </label>
                        <input
                          className="form-control"
                          id="web"
                          type="text"
                          placeholder="Web_url"
                          value={Organizedby_Location}
                          onChange={(e) => setOrganizedby_Location(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="web" className="form-label" >Mobile No</label>
                        <input
                          className="form-control"
                          id="web"
                          type="number"
                          placeholder="Organizers mobileno"
                          value={Organizedby_mobileno}
                          onChange={(e) => setOrganizedby_mobileno(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                          placeholder="Email"
                          value={Organizedby_Email}
                          onChange={(e) => setOrganizedby_Email(e.target.value)}
                        />
                      </div> 
                      <div className="mb-3">
                        <label htmlFor="orgweb" className="form-label" > Web URL</label>
                        <input
                          className="form-control"
                          id="orgweb"
                          type="text"
                          placeholder="Web_url"
                          value={setOrganizedby_WebUrl}
                          onChange={(e) => setOrganizedby_WebUrl(e.target.value)}
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
  </>);

};

export default AddEvent;
