import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";


const ListBlog = () => {
  const BLOG_API = process.env.REACT_APP_BLOG_URL  ;

    const [show, setShow] = useState(false);

  const [blogListss, setBlogListss] = useState([]);
//   const [instaName, setInstaName] = useState('');
//   const [blog_description, setBlog_description] = useState("");

const fetchBlogss = async () => {
    try {
      const response = await axios.get(BLOG_API);
      setBlogListss(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchBlogss();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BLOG_API}/${id}`);
      fetchBlogss();
    } catch (err) {
      console.error(err.response || "Error deleting category");
    }
  };

  const [bloggerid, setbloggerid] = useState("");
  const [bloggerName, setBloggerName] = useState("");
  const [instaName, setinstaName] = useState("");
  const [bloggerDescription, setBloggerDescription] = useState("");


  const handleEdit = async (id) => {
    setShow(true);
    setbloggerid(id);
    setBloggerName("");
    setinstaName("");
    setBloggerDescription("");
  };

  const confirmUpdate = async (e) => {
      console.log("blogger_name", bloggerName);
      console.log("insta_name", instaName);
      console.log("description", bloggerDescription);

    e.preventDefault();
    if (bloggerid && bloggerName && instaName && bloggerDescription) {
      const formData = new FormData();
      formData.append("title", bloggerName);
      formData.append("description", bloggerDescription);
      formData.append("description", bloggerDescription);
     

      try {
        const response = await axios.put(`${BLOG_API}/${bloggerid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("blogger added successfully");
          e.target.reset();
          fetchBlogss();
          setShow(false);
          console.log(response.data)
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


  return (
   <>
   <h3>Blog </h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Blog Title</th>
            <th scope="col">Blog Image</th>
            <th scope="col">Blog Description</th>
            <th scope="col">Blog Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogListss &&
            blogListss.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.title}</td>
                {/* <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.images}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.images}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td>  */}
                <td>{data.description}</td>
                <td>{data.date}</td>
                {/* <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.image}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td> */}
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deleteblog =
                          window.confirm("Delete bloggerlist?");
                        if (deleteblog) {
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

        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="bloggerName" className="form-label">
            Blogger Name
              </label>
              <input
                className="form-control"
                id="bloggerName"
                type="text"
                placeholder="Blogger Name"
                value={bloggerName}
                onChange={(e) => setBloggerName(e.target.value)}
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="instaName" className="form-label">
            Blogger Name
              </label>
              <input
                className="form-control"
                id="instaName"
                type="text"
                placeholder="Blogger Name"
                value={instaName}
                onChange={(e) => setinstaName(e.target.value)}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="bloggerdes" className="form-label">
            Blogger Name
              </label>
              <input
                className="form-control"
                id="bloggerdes"
                type="text"
                placeholder="Blogger Description"
                value={bloggerDescription}
                onChange={(e) => setBloggerDescription(e.target.value)}
              />
            </div>
            {/* <div className="col-md-12 position-relative">
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
                  onChange={(e) => setcatImage(e.target.files[0])}
                />
              </label>
            </div> */}

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
  
   
   </>
  )
}

export default ListBlog;