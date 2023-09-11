import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import toast from "react-hot-toast";

const SubCategoryForm = () => {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState("");
  const [subcategory_image, setSubcategory_image] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [content, setContent] = useState("");

  function handleEditorChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(category_URL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", subcategory);
    formData.append("image", subcategory_image);
    formData.append("content", content);
    formData.append("category", selectedCategory);
    try {
      const response = await axios.post(
        `${category_URL}/${selectedCategory}/subcategories`,
        formData,
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        toast.success("Subcategory created successfully!");
        e.target.reset();
        setSubcategory("");
        // setSelectedCategory('');
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <>
      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <h3 className="mt-2 mb-1 text-center">Add Subcategory</h3>

                  <div className="card-body my-1 py-0">
                    <form onSubmit={handleSubmit}>
                      <div className="my-1 py-0 mx-0 px-0">
                        <label
                          htmlFor="subcategory"
                          className="col-form-label"
                        >
                          Subcategory Name
                        </label>
                        <input
                          type="text"
                          id="subcategory"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          required
                          onChange={(e) => setSubcategory(e.target.value)}
                        />
                      </div>
                      <div className="my-1 py-0 mx-0 px-0">
                        <label
                          htmlFor="category"
                          className="col-form-label"
                        >
                          Category
                        </label>
                        <select
                          className="form-select"
                          id="category"
                          required
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option hidden>Select a category...</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="my-1 py-0 mx-0 px-0">
                        <label
                          htmlFor="image"
                          className="col-form-label me-2"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          className="my-2 form-control-file"
                          accept="image/gif, image/jpeg, image/png ,  image/jpg"
                          onChange={(e) =>
                            setSubcategory_image(e.target.files[0])
                          }
                        />
                      </div>                      
                      <div className="my-1 py-0 mx-0 px-0">
                        <label
                          htmlFor="content"
                          className="col-form-label me-2"
                        >
                          Content
                        </label>
                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>Write something Here!</p>"
                          onChange={handleEditorChange}
                        />
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn btn-success">
                          Create Subcategory
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

export default SubCategoryForm;
