import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Modal , Form} from "react-bootstrap";

const SubCategoryList = () => {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(category_URL);
      setCategories(response.data);
      // console.log(response);
    } catch (err) {
      console.log("category_URL", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteSubCategory = async (id) => {
    try {
      const response = await axios.delete(
        `${category_URL}/subcategories/${id}`
      );
      toast.success(response.data);
      fetchSubCategories();
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  // const editSubCategory = async (id, newName) => {
  //   try {
  //     const response = await axios.put(`${category_URL}/subcategories/${id}`, {
  //       name: newName,
  //     });
  //     if (response.data) {
  //       toast.success("Updated Successfully");
  //     }
  //     fetchSubCategories();
  //   } catch (error) {
  //     console.error("Error editing subcategory:", error);
  //   }
  // };

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(
        `${category_URL}/${selectedCategoryId}/subcategories`
      );
      setSubCategories(response.data);
    } catch (error) {
      console.error("fetchSubCategories", error);
    }
  };
  useEffect(() => {
    if (selectedCategoryId) {
      fetchSubCategories();
    }
  }, [selectedCategoryId]);

  // modal's data

 // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [modalsubcatId, setModalSubCatId] = useState("");
  // const [modalSubcategoryName, setModalSubcategoryName] = useState("");
  // const [modalSubcategory_image, setModalSubcategory_image] = useState(null);
  // const [modalContent, setModalContent] = useState("");
  // const [modalSelectedCategory, setmodalSelectedCategory] = useState("");

  // const [subcategory, setSubcategory] = useState('');
  // const [subcategory_image, setSubcategoryImage] = useState('');
  // const [content, setContent] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');

  // function handleEditorChange(event, editor) {
  //   const data = editor.getData();
  //   setContent(data);
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(modalsubcatId);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   formData.append("name", subcategory);
  //   formData.append("image", subcategory_image);
  //   formData.append("content", content);
  //   // formData.append("category", selectedCategory);

  //   try {
  //     const response = await axios.post(
  //       `${category_URL}/${selectedCategory}/subcategories`,
  //       formData,
  //       {
  //         headers: {
  //           // Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     if (response.data) {
  //       toast.success("Subcategory created successfully!");
  //       e.target.reset();
  //       setSubcategory("");
  //       // setSelectedCategory('');
  //     }
  //   } catch (error) {
  //     console.error(error.response);
  //   }
  // };


  // EDIT CATEGORY
  const [editModal, setEditModal] = useState(false);  
  const [editId, setEditId] = useState('');
  const [editTitle, setEditTitle] = useState('');
  // const [editTag, setEditTag] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImages, setEditImages] = useState([]);

  function handleEdit(catId){
    setEditModal(true);
    setEditId(catId);
    console.log("category id", catId);
  }


 const handleSave = async () => {
    const formData = new FormData();
      formData.append("name", editTitle);
      formData.append("image", editImages);
      formData.append("content", editContent);
    try {
      const response = await axios.put(`${category_URL}/subcategories/${editId}`,  formData,  {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        console.log(response);
        toast.success("Updated Successfully");
      }
      fetchSubCategories();
    } catch (error) {
      console.error("Error editing subcategory:", error);
    }
  };

  return (<>
    <div className="container-fluid">
      <div className="row">
        <h3 className="d-flex justify-content-center mt-4">Subcategory</h3>
        <div className="input-group my-3 col-8">
          <label htmlFor="subcategory" className="input-group-text col-2 fs-5 col-form-label" >Subcategory</label>
          <select className="col-3 form-select" id="subcategory" name="subcategory" onChange={(e) => setSelectedCategoryId(e.target.value)} value={selectedCategoryId} required >
          <option hidden>Select Category...</option>
            {categories && categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name} {category._id}
              </option>))}
          </select>
        </div>
          <table className="table table-striped table-hover">
            <thead className="fs-5">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Subcategory Name</th>
                <th scope="col">Image</th>
                <th scope="col">Subcategory Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {subCategories &&
                subCategories.map((subCategory, index) => {
                  const excerpt = `${subCategory.content.substr(0, 20)} ...`;
                  return (
                    <tr tr="true" key={index}>
                      <td scope="row">{index + 1}</td>
                      <td>{subCategory.name} </td>
                      <td><div style={{ height: "50px", width: "50px" }}>
                        <a href={`${subCategory.image}`} target="_blank" >
                          <img className="img-fluid h-100 w-100" src={`${subCategory.image}`} alt="" />
                        </a></div>
                      </td>
                      <td><p dangerouslySetInnerHTML={{ __html: excerpt }} style={{ display: "inline-block" }} />
                        <a style={{ display: "inline-block" }} href="#"> Read More </a>
                      </td>
                      <td><div className="d-flex gap-2">
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={() => {
                            const delsubCat = window.confirm("Delete category?");
                              if (delsubCat) {
                                deleteSubCategory(subCategory._id);
                              }
                            }}
                          >
                            <i className="bi bi-trash" />
                          </button>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" 
                          onClick={() => { handleEdit(subCategory._id);
                            }}
                          >
                            <i className="bi bi-pencil-square" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className=" input-group mt-3">
              <label htmlFor="modalsubcategory" className=" input-group-text col-auto fs-5 col-form-label" > Subcategory Name </label>
              <input type="text" id="modalsubcategory" className=" form-control" aria-labelledby="passwordHelpInline" required onChange={(e) => setSubcategory(e.target.value)} />
            </div>
            <div className="input-group mt-3">
              <label className="input-group-text col-2 fs-5 col-form-label" htmlFor="modalimage" > Image </label>
              <input type="file" className="input-group-text col-10 col-form-label form-control-file" id="modalimage" name="my-images"
                accept="image/gif, image/jpeg, image/png"
                onChange={(e) => setSubcategoryImage(e.target.files[0])}
              />
            </div>
            <div className="input-group mt-3">
              <label htmlFor="category" className="input-group-text col-3 fs-5 col-form-label" > Category </label>
              <select className="col-3 form-select" id="category" required value={modalSelectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
                <option hidden>Select a category...</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" input-group mt-3">
              <label htmlFor="content" className=" input-group-text col-auto fs-5 col-form-label" > Content </label>
              <CKEditor editor={ClassicEditor} data="<p>Write something Here!</p>" onChange={handleEditorChange} />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="button" onClick={handleClose} className="btn btn-danger me-3" > Close </button>
              <button type="submit" className="btn btn-success"> Save Changes </button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}

      <Modal className="modal-close d-inline-block" dialogClassName="modal-semi-full" centered scrollable show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title as="h4">Edit Subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form>
              <div className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>Category Content</Form.Label>
                <Form.Control type="text" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
               
              </div>
              {/* <div className="mb-3">
                <Form.Label>Blog Tag</Form.Label>
                <Form.Control type="text" value={editTag} onChange={(e) => setEditTag(e.target.value)} />
              </div> */}
              <div className="mb-3">
                <Form.Label>Category Images</Form.Label>
                <Form.Control type="file" accept="image/*" multiple onChange={(e) => setEditImages(e.target.files[0])} />
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
};

export default SubCategoryList;
