import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

const AddOrganizedby = () => {

    const ORGANIZEDBY_API = process.env.REACT_APP_ORGANIZEDBY_URL ;

    const [organized_title, setOrganized_title] = useState('');
    const [organized_Description, setOrganized_Description] = useState("");
    const [organized_Date, setOrganized_Date] = useState("");
    const [organized_Image, setOrganized_Image] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (blog_title  && blog_Image && blogDescription && blog_Date) {

      const formData = new FormData();
      formData.append('title', organized_title);
       formData.append('my-images', organized_Image);
      formData.append('description', organized_Description);
      formData.append('date', organized_Date);

      try {
        const response = await axios.post(ORGANIZEDBY_API, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("blog added successfully");
          e.target.reset();
          setOrganized_title("")
          setOrganized_Description("")
          setOrganized_Date("")
          setOrganized_Image(null)
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");

      }
    }
//     else {
//       toast.error("All fields are mandatory.");
//     }
//   }

  return (
    <>
    <main>
        <section>
          <div className="container-fluid">
            <div className="row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <div className="card-header border-bottom p-3">
                    <h5 className="card-header-title mb-0">Add OrganizedBY</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="orgnizedtitle" className="form-label" >      Title</label>
                        <input
                          className="form-control"
                          id="orgnizedtitle"
                          type="text"
                          placeholder=" Title"
                          value={organized_title}
                          onChange={(e) => setOrganized_title(e.target.value)}
                        />
                      </div>

                           <div className="col-md-12 position-relative">
                        <h6 className="my-2"> Image</h6>
                        <label className="w-100"
                          htmlFor="image"

                          style={{ cursor: "pointer" }}>
                          <input
                            className="form-control stretched-link"
                            type="file"
                            name="my-images"
                            id="image"
                            accept="image/gif, image/jpeg, image/png"
                            onChange={(e) => setOrganized_Image(e.target.files[0])}
                          />
                        </label>
                      </div> 

                      <div className="mb-3">
                        <label htmlFor="orgdes" className="form-label" > Description</label>
                        <input
                          className="form-control"
                          id="orgdes"
                          type="text"
                          placeholder=" Description"
                          value={organized_Description}
                          onChange={(e) => setOrganized_Description(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="Date" className="form-label" > Date</label>
                        <input
                          className="form-control"
                          id="Date"
                          type="datetime-local"
                          placeholder=" Date"
                          value={organized_Date}
                          onChange={(e) => setOrganized_Date(e.target.value)}
                        />
                      </div>


                  

                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="submit"
                          className="btn btn-outline-success"
                        >
                          Create Blog
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
  )
}

export default AddOrganizedby