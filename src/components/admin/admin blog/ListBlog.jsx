import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";


const ListBlog = () => {
  const BLOG_API = process.env.REACT_APP_BLOG_URL;
  const [blog, setBlog] = useState([]);

  const fetchBlogss = async () => {
    try {
      const response = await axios.get(BLOG_API);
      setBlog(response.data);
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

  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [blog_title, setBlog_title] = useState('');
  const [blogDescription, setBlogDescription] = useState("");
  const [blog_Date, setBlog_Date] = useState("");
  const [blog_Image, setBlog_Image] = useState(null);


  const handleEdit = async (id, desc, title, date) => {
    setShow(true);
    setEditId(id);
    setBlogDescription(desc);
    setBlog_title(title);
    setBlog_Date(date);
  };

  const confirmUpdate = async (e) => {
    e.preventDefault();
    if (editId && blog_title && blogDescription && blog_Date && blog_Image) {
      const formData = new FormData();
      formData.append("title", blog_title);
      formData.append("description", blogDescription);
      formData.append("date", blog_Date);
      formData.append('my-images', blog_Image);

      try {
        const response = await axios.put(`${BLOG_API}/${editId}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Blog Updated Successfully");
          e.target.reset();
          fetchBlogss();
          setShow(false);
          setEditId("");
          setBlogDescription("");
          setBlog_title("");
          setBlog_Date("");
          setBlog_Image(null);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };


  return (<>
     <h4 className='text-center mt-2 mb-4'>Blog </h4>
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
          {blog &&
            blog.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.title}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.images}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={data.images}
                        alt="blog"
                      />
                    </a>
                  </div>
                </td> 
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
                    <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                      onClick={() => { const deleteblog = window.confirm("Delete bloggerlist?");
                        if (deleteblog) { handleDelete(data._id); } }}
                    >
                      <i className="bi bi-trash" />
                    </button>
                    <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                      onClick={() => handleEdit(data._id, data.description, data.title, data.date)}
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
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="blogtitle" className="form-label" >Blog Title</label>
              <input onChange={(e) => setBlog_title(e.target.value)} className="form-control" id="blogtitle" type="text" placeholder="Blog Title" value={blog_title} />
            </div>
            <div className="col-md-12 position-relative">
              <h6 className="my-2">Blog Image</h6>
              <label className="w-100" htmlFor="image" style={{ cursor: "pointer" }}>
                <input onChange={(e) => setBlog_Image(e.target.files[0])} className="form-control stretched-link" type="file" name="my-images" id="image" accept="image/gif, image/jpeg, image/png" />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="blogdes" className="form-label" >Blog Description</label>
              <input onChange={(e) => setBlogDescription(e.target.value)} className="form-control" id="blogdes" type="text" placeholder="Blog Description" value={blogDescription} />
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label" >Blog Date</label>
              <input onChange={(e) => setBlog_Date(e.target.value)} className="form-control" id="Date" type="datetime-local" placeholder="Blog Date" value={blog_Date} />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success" > Create Blog </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>   
  </>)
}

export default ListBlog;
