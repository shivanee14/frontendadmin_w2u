import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";



const AddBloginfluencer = () => {

    const BLOG_INFLUENCER_API = process.env.REACT_APP_BLOGGER_URL ;


  const [bloginfluencer_Name, setBloginfluencer_Name] = useState('');
  const [insta_name, setInsta_name] = useState("");
  const [blog_description, setBlog_description] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (bloginfluencer_Name && insta_name && blog_description) {

      const formData = new FormData();
      formData.append('blogger_name', bloginfluencer_Name);
      formData.append('insta_name', insta_name);
      formData.append('description', blog_description);

      try {
        const response = await axios.post(BLOG_INFLUENCER_API, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          setBloginfluencer_Name("")
          setInsta_name("")
          setBlog_description("")
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
                    <h5 className="card-header-title mb-0">Add Influencer's Blog</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="bloggerName" className="form-label" >Blogger Name</label>
                        <input
                          className="form-control"
                          id="bloggerName"
                          type="text"
                          placeholder="Blogger Name"
                          value={bloginfluencer_Name}
                          onChange={(e) => setBloginfluencer_Name(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="instaName" className="form-label" >Instagram Username</label>
                        <input
                          className="form-control"
                          id="instaName"
                          type="text"
                          placeholder="Insta Handle"
                          value={insta_name}
                          onChange={(e) => setInsta_name(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label" >Blog Description</label>
                        <input
                          className="form-control"
                          id="description"
                          type="text"
                          placeholder="Blog Description"
                          value={blog_description}
                          onChange={(e) => setBlog_description(e.target.value)}
                        />
                      </div>


                      {/* <div className="col-md-12 position-relative">
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
                            onChange={(e) => setCategory_image(e.target.files[0])}
                          />
                        </label>
                      </div> */}

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
  );

};

export default AddBloginfluencer;
