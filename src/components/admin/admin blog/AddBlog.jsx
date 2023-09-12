import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

const AddBlog = () => {
  const BLOG_API = process.env.REACT_APP_BLOG_URL;

  const [blog_title, setBlog_title] = useState('');
  const [blogDescription, setBlogDescription] = useState("");
  const [blog_Date, setBlog_Date] = useState("");
//const [blog_Image, setBlog_Image] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (blog_title  && blog_Image && blogDescription && blog_Date) {

      const formData = new FormData();
      formData.append('title', blog_title);
    //   formData.append('images', blog_Image);
      formData.append('description', blogDescription);
      formData.append('date', blog_Date);

      try {
        const response = await axios.post(BLOG_API, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("blog added successfully");
          e.target.reset();
          setBlog_title("")
          setBlogDescription("")
          setBlog_Date("")
        //   setBlog_Image(null)
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
                    <h5 className="card-header-title mb-0">Add Blog</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="blogtitle" className="form-label" >Blog Title</label>
                        <input
                          className="form-control"
                          id="blogtitle"
                          type="text"
                          placeholder="Blog Title"
                          value={blog_title}
                          onChange={(e) => setBlog_title(e.target.value)}
                        />
                      </div>

                           {/* <div className="col-md-12 position-relative">
                        <h6 className="my-2">Blog Image</h6>
                        <label className="w-100"
                          htmlFor="image"

                          style={{ cursor: "pointer" }}>
                          <input
                            className="form-control stretched-link"
                            type="file"
                            name="my-images"
                            id="image"
                            accept="image/gif, image/jpeg, image/png"
                            onChange={(e) => setBlog_Image(e.target.files[0])}
                          />
                        </label>
                      </div>  */}

                      <div className="mb-3">
                        <label htmlFor="blogdes" className="form-label" >Blog Description</label>
                        <input
                          className="form-control"
                          id="blogdes"
                          type="text"
                          placeholder="Blog Description"
                          value={blogDescription}
                          onChange={(e) => setBlogDescription(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="Date" className="form-label" >Blog Date</label>
                        <input
                          className="form-control"
                          id="Date"
                          type="datetime-local"
                          placeholder="Blog Date"
                          value={blog_Date}
                          onChange={(e) => setBlog_Date(e.target.value)}
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
  );

};

export default AddBlog;
