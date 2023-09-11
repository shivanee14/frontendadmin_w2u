import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Modal , Form, Card} from "react-bootstrap";

function ListBusinessListing() {
  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING ;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const [businesses, setBusinesses] = useState([]);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(category_URL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        const response = await axios.get(
          `${category_URL}/${category}/subcategories`
        );
        setSubCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    if (category) {
      fetchSubcategories();
    }
  }, [category]);

  const fetchbusinesses = async () => {
    try {
      const response = await axios.get(business_listing_URL);
      setBusinesses(response.data);
      // console.log("hello")
      console.log(response.data);
    } catch (err) {
      console.log("business_listing_URL", err);
      toast(err.response.data.message || "Error fetching businesses");
    }
  };
  useEffect(() => {
    fetchbusinesses();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("id", id);
      await axios.delete(`${business_listing_URL}/${id}`);
      fetchbusinesses();
    } catch (err) {
      console.error(err.response || "Error deleting bussiness");
    }
  };

    // EDIT Business Listing
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState(null);
    const [mobileNo, setMobileNo] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [business_image, setBusinessImage] = useState(null);
    const [logoimage, setLogoimage] = useState("");



    const [editModal, setEditModal] = useState(false);  
    const [editId, setEditId] = useState('');

  function handleEdit(id){
    console.log(id);
    setEditModal(true);
    setEditId(id);
    console.log("Business ID", id);
  }

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("mobileNo", mobileNo);
    formData.append("email", email);
    formData.append("websiteUrl", websiteUrl);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("images", business_image);
    formData.append("contact_no", contactNo);
    formData.append("logoimage", logoimage);
    try {
      const response = await axios.put(`${business_listing_URL}/${editId}`,  formData,  {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        console.log(response.data);
        toast.success("Updated Successfully");
      }
      fetchbusinesses();
    } catch (error) {
      console.error("Error editing subcategory:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h3 className="d-flex justify-content-center mt-4 mb-4">
            Business Listing
          </h3>
          <Card>
            <Card.Body>

            </Card.Body>
          </Card>
          <table className="table table-striped table-hover">
            <thead>
              <tr className="fs-6">
                {/* <th scope="col">Id</th> */}
                <th scope="col">Company Firm Name</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Email</th>
                <th scope="col">Category</th>
                <th scope="col">Subcategory</th>
                <th scope="col">Company Firm Logo</th>
                <th scope="col">Website Url</th>
                <th scope="col">Description Product Service</th>
                <th scope="col">Longitude</th>
                <th scope="col">Latitude</th>
                <th scope="col">Business Listing Image</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {businesses &&
                businesses.map((data, index) => (
                  <tr key={index}>
                    {/* <td scope="row">{index + 1}</td> */}
                    <td>{data.title}</td>
                    <td>{data.mobileNo}</td>
                    <td>{data.email}</td>
                    <td>{data.description}</td>
                    <td>{data.description}</td>
                    <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${data.images}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${data.images[0]}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td>
                    {/* <td>{data.description}</td>
                    <td>{data.websiteUrl}</td>
                    <td>{data.address.location.coordinates[0]}</td>
                    <td>{data.address.location.coordinates[1]}</td> */}




                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => {
                             const deletelist =
                            window.confirm("Delete Business List?");
                           if (deletelist) {
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
                          onClick={() => handleEdit(data._id, data.title, data.description, data.address, data.mobileNo, data.contact_no, data.email )}
                        >
                          <i className="bi bi-pencil-square" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal className="modal-close d-inline-block" dialogClassName="modal-semi-full" centered scrollable show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title as="h4">Edit Business List</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
            <Form>
              <div className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Description of Product Service</Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Mobile no</Form.Label>
                <Form.Control type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Contact No</Form.Label>
                <Form.Control type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Website URL</Form.Label>
                <Form.Control type="text" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select onChange={(e) => setCategory(e.target.value)}>
                  <option hidden>category...</option>
                          {categories.map((category, index) => (
                            <option key={index} value={category._id}>
                              {category.name}
                            </option>
                          ))}

                </Form.Select>
              </div>
              <div className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <Form.Select onChange={(e) => setSubcategory(e.target.value)}>
                <option hidden>Subcategory...</option>
                          {subCategories.map((subcategory, index) => (
                            <option key={index} value={subcategory._id}>
                              {subcategory.name}
                            </option>
                          ))}

                </Form.Select>
              </div>
              <div className="mb-3">
                <Form.Label>Company Business Image</Form.Label>
                <Form.Control type="file" accept="image/*" multiple onChange={(e) => setBusinessImage(e.target.files[0])} />
              </div>
              <div className="mb-3">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control type="file" accept="image/*" multiple onChange={(e) => setLogoimage(e.target.files[0])} />
              </div>
            </Form>
          
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary" className="btn-icon btn-icon-start" type="button" onClick={() => handleSave()}>
            {/* <CsLineIcons icon="save" /> */}
            <span> Save</span>
          </Button>
          <Button variant="outline-primary" className="btn-icon " onClick={() => setEditModal(false)}>
            <span> Cancel</span>
            {/* <CsLineIcons icon="close" /> */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListBusinessListing;
