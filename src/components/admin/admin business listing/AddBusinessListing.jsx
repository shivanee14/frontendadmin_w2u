import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BusinessListingForm = () => {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;

  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING;

  // const token = localStorage.getItem("accessToken");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  // business listing data 
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState(null);
  const [mobileNo, setmobileNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setemail] = useState("");
  const [websiteUrl, setwebsiteUrl] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [business_image, setbusiness_image] = useState(null);
  const [logoimage, setLogoimage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && description && address && latitude && longitude && mobileNo && email && websiteUrl && category && subcategory && business_image) {

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
        const response = await axios.post(business_listing_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });         
        if (response.data) {
          toast.success("Business listing created successfully!");
          e.target.reset();
          console.log(response);
        }
      } catch (error) {
        console.error("Error creating business listing:", error);
      }
    }
    else {
      toast.error("All business fields are mandatory")
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
                  <h3 className="mt-3 text-center">Business Listing</h3>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="companyFirmName"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Company Firm Name
                        </label>
                        <input
                          type="text"
                          id="companyFirmName"
                          name="title"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Enter a company name"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className=" input-group mt-3">
                        <label
                          htmlFor="DescProductService"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Description Product Service
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="DescProductService"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Description of Product and its Service"
                          onChange={(e) => setdescription(e.target.value)}
                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="address"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Enter business address"
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="latitude"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Latitude
                        </label>
                        <input
                          type="number"
                          step="any"
                          // step="any"
                          name="latitude"
                          id="latitude"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Enter Latitude"
                          // onChange={(e) => console.log(e.target.value)}
                          onChange={(e) => setlatitude(e.target.value)}
                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="longitude"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Longitude
                        </label>
                        <input
                          type="number"
                          step="any"
                          name="longitude"
                          id="longitude"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Enter Longitude"
                          onChange={(e) => setlongitude(e.target.value)}
                        />
                      </div>

                      <div className="input-group mt-3">
                        <label
                          htmlFor="phone"
                          className="input-group-text col-auto fs-5 col-form-label"
                        >
                          Mobile No.
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="mobileNo"
                          placeholder="12345 67891"
                          // pattern="[0-9]{5}-[0-9]{5}"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setmobileNo(e.target.value)}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="phone"
                          className="input-group-text col-auto fs-5 col-form-label"
                        >
                          Contact No.
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="contactNo"
                          placeholder="12345 67891"
                          // pattern="[0-9]{5}-[0-9]{5}"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setContactNo(e.target.value)}
                        />
                      </div>
                      
                      <div className="input-group mt-3">
                        <label
                          htmlFor="email"
                          className="input-group-text col-auto fs-5 col-form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="example@gmail.com"
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </div>

                      <div className=" input-group mt-3">
                        <label
                          htmlFor="url"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Website URL
                        </label>
                        <input
                          type="text"
                          id="url"
                          name="websiteUrl"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Enter website URL here"
                          onChange={(e) => setwebsiteUrl(e.target.value)}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="category"
                          className="input-group-text col-3 fs-5 col-form-label"
                        >
                          Category
                        </label>
                        <select
                          className="col-3 form-select"
                          id="category"
                          name="category"
                          onChange={(e) => setcategory(e.target.value)}
                        >
                          <option hidden>category...</option>
                          {categories.map((category, index) => (
                            <option key={index} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="subcategory"
                          className="input-group-text col-3 fs-5 col-form-label"
                        >
                          Subcategory
                        </label>
                        <select
                          className="col-3 form-select"
                          id="subcategory"
                          name="subCategory"
                          onChange={(e) => setsubcategory(e.target.value)}
                        >
                          <option hidden>subcategory...</option>
                          {subCategories.map((subcategory, index) => (
                            <option key={index} value={subcategory._id}>
                              {subcategory.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-gorup input-group mt-3 form-group">
                        <label
                          className="input-group-text  col-4 fs-5 col-form-label"
                          htmlFor="companyFirmLogo"
                        >
                          Company Business Image
                        </label>
                        <input
                          type="file"
                          name="business_image"
                          className="input-group-text col-8 col-form-label form-control-file"
                          id="companyFirmLogo"
                          placeholder="Upload"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={(e) => setbusiness_image(e.target.files[0])}
                        />
                      </div>
                      <div className="form-gorup input-group mt-3 form-group">
                        <label
                          className="input-group-text  col-4 fs-5 col-form-label"
                          htmlFor="companyFirmLogo"
                        >
                          Company Firm Logo
                        </label>
                        <input
                          type="file"
                          name="logoimage"
                          className="input-group-text col-8 col-form-label form-control-file"
                          id="companyFirmLogo"
                          placeholder="Upload"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={(e) => setLogoimage(e.target.files[0])}
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
};

export default BusinessListingForm;
