import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";

function ListSocialMedia() {
  const SOCIAL_MEDIA_API = process.env.REACT_APP_SOCIAL_MEDIA_URL;

  const [socials, setSocials] = useState([]);
  const [show, setShow] = useState(false);

const fetchSocial = async () => {
    try {
      const response = await axios.get(SOCIAL_MEDIA_API);
      setSocials(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchSocial();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SOCIAL_MEDIA_API}/${id}`);
      fetchSocial();
    } catch (err) {
      console.error(err.response || "Error deleting social_media_list");
    }
  };

  const [socialid, setsocialid] = useState("");
  const [title, setTitle] = useState("");
  const [socialImage, setsocialImage] = useState(null);

  const handleEdit = async (id, title, image) => {
    setShow(true);
    setsocialid(id);
    setTitle(title);
    setsocialImage(image);

  };

  // console.log("title", title);
  // console.log("my-images", socialImage);
 
  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (socialid && title && socialImage) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("my-images", socialImage);
  
      try {
        const response = await axios.put(`${SOCIAL_MEDIA_API}/${socialid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Social Media Post updated Successfully");
          e.target.reset();
         // console.log(response);
          fetchSocial();
          setShow(false);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  return (<div>
    <h4 className='text-center mt-2 mb-4'>List of Social Media Post</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">logo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {socials &&
            socials.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.title}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.Image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={data.Image}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
               <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-light btn-round mb-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      onClick={() => {
                        const deletesocial =
                          window.confirm("Delete Social Media Post?");
                        if (deletesocial) {
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
                      onClick={() => handleEdit(data._id, data.title, data.Image )}
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
          <Modal.Title>Edit Social Media Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label"> Title </label>
              <input className="form-control" id="categoryName" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="col-md-12 position-relative">
              <label className="w-100" htmlFor="my-images" style={{ cursor: "pointer" }} > Add Image  </label>
              <input onChange={(e) => setsocialImage(e.target.files[0])} className="form-control stretched-link" type="file" name="my-images" id="image" accept="image/gif, image/jpeg, image/png" />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2"> Save Changes </button>
              <button type="button" onClick={() => setShow(false)} className="btn btn-outline-success" > Close </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
   </div>
  )
}

export default ListSocialMedia;