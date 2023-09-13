import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";


const ListBloginfluencer = () => {
  const BLOG_INFLUENCER_API = process.env.REACT_APP_BLOGGER_URL;
  const [blogger, setbBlogger] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(BLOG_INFLUENCER_API);
      setbBlogger(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BLOG_INFLUENCER_API}/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error(err.response || "Error deleting category");
    }
  };

  const [show, setShow] = useState(false);
  const [bloggerid, setbloggerid] = useState("");
  const [bloggerName, setBloggerName] = useState("");
  const [instaName, setinstaName] = useState("");
  const [bloggerDescription, setBloggerDescription] = useState("");

  const handleEdit = async (id,name,insta,des) => {
    setShow(true);
    setbloggerid(id);
    setBloggerName(name); 
    setinstaName(insta);   
    setBloggerDescription(des);     
  };

  const confirmUpdate = async (e) => {
    e.preventDefault();
    if (bloggerid && bloggerName && instaName && bloggerDescription) {
      const formData = new FormData();
      formData.append("blogger_name", bloggerName);
      formData.append("insta_name", instaName);
      formData.append("description", bloggerDescription);     

      try {
        const response = await axios.put(`${BLOG_INFLUENCER_API}/${bloggerid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("blogger added successfully");
          e.target.reset();
          fetchBlogs();
          setShow(false);
          console.log(response.data)
          setBloggerName("");
          setinstaName("");
          setBloggerDescription("");
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  return (<>
    <h4 className='text-center mt-2 mb-4'>Blog Influencer</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Blogger Name</th>
            <th scope="col">Insta name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogger &&
            blogger.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.blogger_name}</td>
                <td>{data.insta_name}</td>
                <td>{data.description}</td>
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
                      onClick={() => handleEdit(data._id,data.blogger_name,data.insta_name,data.description)}
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
          <Modal.Title>Edit Blogger's Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="bloggerName" className="form-label"> Blogger Name </label>
              <input className="form-control" id="bloggerName" type="text" placeholder="Blogger Name" value={bloggerName} onChange={(e) => setBloggerName(e.target.value)} />
            </div>           
            <div className="mb-3">
              <label htmlFor="instaName" className="form-label"> Insta Name </label>
              <input className="form-control" id="instaName" type="text" placeholder="Blogger Name" value={instaName} onChange={(e) => setinstaName(e.target.value)} />
            </div>
             <div className="mb-3">
              <label htmlFor="bloggerdes" className="form-label"> Description </label>
              <input className="form-control" id="bloggerdes" type="text" placeholder="Blogger Description" value={bloggerDescription} onChange={(e) => setBloggerDescription(e.target.value)} />
            </div>          
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2"> Save Changes </button>
              <button type="button" onClick={() => setShow(false)} className="btn btn-outline-success" > Close </button>
            </div>
            <div className="col-md-12 position-relative">
              <h6 className="my-2">Add Image</h6>
              <label className="w-100" htmlFor="my-images" style={{ cursor: "pointer" }} >
                <input className="form-control stretched-link" type="file" name="my-images" id="image" accept="image/gif, image/jpeg, image/png" onChange={(e) => setcatImage(e.target.files[0])} />
              </label>
            </div>
          </form>
        </Modal.Body>
      </Modal>   
  </>)
}

export default ListBloginfluencer;
