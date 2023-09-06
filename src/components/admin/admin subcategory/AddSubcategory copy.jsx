import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";


function AddSubcategory() {

  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const subcategory_URL = process.env.REACT_APP_SUBCATEGORY_URL

  const [category, setCategory] = useState([]);

  // form data 

  const [subcategory_name, setSubcategory_name] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [subcategory_image, setSubcategory_image] = useState(null)
  const [subcategory_content, setSubcategory_content] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(category_URL);
        setCategory(response.data);
        // console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  function handleSubmit(e) {

    e.preventDefault();

    const token = localStorage.getItem("accessToken");

    if (subcategory_name && selectedCategory && subcategory_content) {
      const formData = new FormData();
      formData.append("subcategory_Name", subcategory_name);
      formData.append("cat_id", selectedCategory);
      formData.append("my-images", subcategory_image);
      formData.append("subcategory_contant", subcategory_content);

      axios
        .post(subcategory_URL, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data) {
            toast.success("Subcategory added successfully");

            e.target.reset()
            setSubcategory_name("")
            setSubcategory_image(null)
            setSelectedCategory(null)
            setSubcategory_content("")

          }
        })
        .catch((error) => {
          console.error(error.response);
        });
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
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <h3 className="mt-3 text-center">Add Subcategory</h3>

                  <div className="card-body">
                    <form onSubmit={handleSubmit}>

                      <div className=" input-group mt-3">
                        <label
                          htmlFor="subcategory"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Subcategory Name
                        </label>
                        <input
                          type="text"
                          id="subcategory"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setSubcategory_name(e.target.value)}

                        />
                      </div>

                      <div className="input-group mt-3">
                        <label htmlFor="category"
                          className="input-group-text col-3 fs-5 col-form-label"
                        >
                          Category
                        </label>
                        <select
                          className="col-3 form-select"
                          id="category"
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option hidden>category...</option>
                          {
                            category && category.map((item, index) => <option key={index} value={item._id}>{item.category_name}</option>)

                          }
                        </select>
                      </div>

                      <div className="input-group mt-3">
                        <label
                          className="input-group-text  col-2 fs-5  col-form-label"
                          htmlFor="image"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          className="input-group-text col-10 col-form-label form-control-file"
                          id="image"
                          name="my-images"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={(e) => setSubcategory_image(e.target.files[0])}
                        />
                      </div>

                      <div className="input-group mt-3">
                        <label
                          htmlFor="inputsubcatContent"
                          className="input-group-text col-auto fs-5 col-form-label"
                        >
                          Subcategory Content
                        </label>
                        <input
                          type="text"
                          id="inputsubcatContent"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setSubcategory_content(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn btn-success">
                          Submit
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
}

export default AddSubcategory;
