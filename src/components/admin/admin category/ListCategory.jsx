import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const CategoryList = () => {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(category_URL);
      setCategories(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${category_URL}/${id}`);
      fetchCategories();
    } catch (err) {
      console.error(err.response || "Error deleting category");
    }
  };

  // try {
  //   await axios.put(`${category_URL}/${id}`, { name: newName });
  //   fetchCategories();
  // } catch (err) {
  //   console.error(err.response || "Error updating category");
  // }

  const [catid, setcatid] = useState("");
  const [catName, setcatName] = useState("");
  const [catImage, setcatImage] = useState(null);

  const handleEdit = async (id) => {
    setShow(true);
    setcatid(id);
  };
  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (catid && catName && catImage) {
      const formData = new FormData();
      formData.append("name", catName);
      formData.append("my-images", catImage);

      try {
        const response = await axios.put(`${category_URL}/${catid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log(response)
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          setcatName("");
          setcatImage(null);
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <h3>Category</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((data, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.image}`}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">
                Category Name
              </label>
              <input
                className="form-control"
                id="categoryName"
                type="text"
                placeholder="Category Name"
                value={catName}
                onChange={(e) => setcatName(e.target.value)}
              />
            </div>

            <div className="col-md-12 position-relative">
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
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryList;
