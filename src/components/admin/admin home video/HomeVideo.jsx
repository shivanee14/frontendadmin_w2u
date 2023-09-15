import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

function HomeVideo() {

  const HOME_API = process.env.REACT_APP_INDEX_VIDEO_URL;

  const [homes, setHomes] = useState([]);
  const [show, setShow] = useState(false);

  const fetchHomes = async () => {
    try {
      const response = await axios.get(HOME_API);
      setHomes(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${HOME_API}/${id}`);
      fetchHomes();
    } catch (err) {
      console.error(err.response || "Error deleting homes");
    }
  };

  const [homeid, sethomeid] = useState("");
  const [hometitle, sethometitle] = useState("");
  const [homeImage, sethomeImage] = useState(null);

  const handleEdit = async (id, title) => {
    setShow(true);
    sethomeid(id);
    sethometitle(title);    
  };

  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (homeid && hometitle && homeImage) {
      const formData = new FormData();
      formData.append("title", hometitle);
      formData.append("my-images", homeImage);

      try {
        const response = await axios.put(`${HOME_API}/${homeid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("image added successfully");
          e.target.reset();
          fetchHomes();
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
      <div className='container-fluid'>
        <div className='row'>
          <h3 className="d-flex justify-content-center mt-4 mb-4">
            Home Images
          </h3>
          <table className="table table-striped table-hover" >

            <thead className="fs-5">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title </th>
                <th scope="col">Image </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
          {homes &&
            homes.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.title}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.images}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.images}`}
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
                        const deletecategory =
                          window.confirm("Delete category?");
                        if (deletecategory) {
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
                      onClick={() => handleEdit(data._id, data.title)}
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
              <label htmlFor="hometitle" className="form-label">
             Home Title
              </label>
              <input
                className="form-control"
                id="hometitle"
                type="text"
                placeholder=" Home Title"
                value={hometitle}
                onChange={(e) => sethometitle(e.target.value)}
              />
            </div>

            <div className="col-md-12 position-relative">
              <h6 className="my-2">Add Home Image</h6>
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
                  onChange={(e) => sethomeImage(e.target.files[0])}
                />
              </label>
            </div>

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
        </div>
      </div>
    </>
  )
}

export default HomeVideo;