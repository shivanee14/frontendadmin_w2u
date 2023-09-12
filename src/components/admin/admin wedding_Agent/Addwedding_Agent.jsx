import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";



const Addwedding_Agent = () => {
  console.log("Hello");

  const wdding_agent_URL = process.env.REACT_APP_WEDDING_URL ;

  const [venture_Name, setVenture_Name] = useState('');
  const [agent_Name, setAgent_Name] = useState('');
  const [wedding_agent_image, setWedding_agent_image] = useState(null);
  const [agent_contactno, setAgent_contactno] = useState('');
  const [agent_description, setAgent_description] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (venture_Name && agent_Name && agent_contactno && agent_description) {

      const formData = new FormData();
      formData.append('ventureName', venture_Name);
      formData.append('agentName', agent_Name);
      formData.append('my-images', wedding_agent_image);
      formData.append('contactNo', agent_contactno);
      formData.append('description', agent_description);

      try {
        const response = await axios.post(wdding_agent_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          console.log(response.data);
          setVenture_Name("")
        //   setWedding_agent_image(null)
          setAgent_Name("")
          setAgent_contactno("")
          setAgent_description("")
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
                    <h5 className="card-header-title mb-0">Add Wedding_Agent  </h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="ventureName" className="form-label" >Venture Name</label>
                        <input
                          className="form-control"
                          id="ventureName"
                          type="text"
                          placeholder="Venture Name"
                          value={venture_Name}
                          onChange={(e) => setVenture_Name(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="agentName" className="form-label" >Agent Name</label>
                        <input
                          className="form-control"
                          id="agentName"
                          type="text"
                          placeholder="Agent Name"
                          value={agent_Name}
                          onChange={(e) => setAgent_Name(e.target.value)}
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
                            onChange={(e) => setWedding_agent_image(e.target.files[0])}
                          />
                        </label>
                      </div> 
                          
                          <div className="mb-3">
                        <label htmlFor="contactno" className="form-label" >Contact no</label>
                        <input
                          className="form-control"
                          id="contactno"
                          type="number"
                          placeholder="Contact no"
                          value={agent_contactno}
                          onChange={(e) => setAgent_contactno(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label" >Description</label>
                        <input
                          className="form-control"
                          id="description"
                          type="text"
                          placeholder="Description"
                          value={agent_description}
                          onChange={(e) => setAgent_description(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="submit"
                          className="btn btn-outline-success"
                        >
                          Create Wedding_Agent
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

export default Addwedding_Agent;


