import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";



const CategoryForm = () => {

  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const [categoryName, setCategoryName] = useState('');
  const [category_image, setCategory_image] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (categoryName && category_image) {

      const formData = new FormData();
      formData.append('name', categoryName);
      formData.append('my-images', category_image);

      try {
        const response = await axios.post(category_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("category added successfully");
          e.target.reset();
          setCategoryName("")
          setCategory_image(null)
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
                    <h5 className="card-header-title mb-0">Add Category</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label" >Category Name</label>
                        <input
                          className="form-control"
                          id="categoryName"
                          type="text"
                          placeholder="Category Name"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12 position-relative">
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
                      </div>

                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="submit"
                          className="btn btn-outline-success"
                        >
                          Create Category
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

export default CategoryForm;
