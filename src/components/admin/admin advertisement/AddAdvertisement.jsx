import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddAdvertisement() {


  const advertisement_URL = process.env.REACT_APP_POST_ADVERTISEMENT_URL
  const business_URL = process.env.REACT_APP_BUSINESS_LISTING;


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [businessListingId, setBusinessListing] = useState(null);
  const [business_details, setBusiness_details] = useState([]);
  const active = false;

  const token = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e", e);
    console.log("title", title);
    console.log("description", description);
    console.log("imageURL", imageURL);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("businessListingId", businessListingId);
    if (title && description && imageURL && startDate && endDate && businessListingId) {

      const formData = new FormData();

      formData.append("title", title);
      formData.append("active", active);
      formData.append("description", description);
      formData.append("my-images", imageURL);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("businessListing", businessListingId);

      try {
        const response = await axios.post(advertisement_URL, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status) {
          console.log(response);
          toast.success("Business listing created successfully!");
          e.target.reset();
          setTitle("")
          setBusinessListing(null)
        }
        else {
          console.error("something went wrong!");
        }

      } catch (error) {
        console.error("Error creating business listing:", error);
      }

    }
    else {

      toast.error("Advertisement Form fields are mandatory!");

    }
  };


  // GET Business Details

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get(business_URL);
        setBusiness_details(response.data);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    };

    fetchBusinesses();
  }, []);


  return (
    <>
      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <h3 className="mt-3 text-center">Add Advertisement Listing</h3>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="inputTitle"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="inputTitle"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter title"
                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="description"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Description:

                        </label>
                        <input
                          type="text"
                          id="description"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Enter description"
                        />
                      </div>

                      <div className="form-gorup input-group mt-3 form-group ">
                        <label
                          className="input-group-text col-3 fs-5 col-form-label"
                          htmlFor="shortImage"
                        >
                          Image

                        </label>
                        <input
                          type="file"
                          placeholder="Upload"

                          className="input-group-text col-9 col-form-label form-control-file"
                          id="shortImage"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={(e) => setImageURL(e.target.files[0])}

                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="startdate"
                          className="col-3 input-group-text col-auto fs-5 col-form-label"
                        >
                          Start Date
                        </label>
                        <input
                          type="datetime-local"
                          id="startdate"
                          className="col-3 form-control"
                          aria-labelledby="passwordHelpInline"
                          // placeholder="Business id here"
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>

                      <div className="input-group mt-3">
                        <label
                          htmlFor="enddate"
                          className="col-3 input-group-text col-auto fs-5 col-form-label"
                        >
                          End Date:
                        </label>
                        <input
                          type="datetime-local"
                          id="enddate"
                          className="col-3 form-control"
                          aria-labelledby="passwordHelpInline"
                          // placeholder="Business id here"
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="dropdown1"
                          className="input-group-text col-3 fs-5 col-form-label"
                        >
                          Business Listing
                        </label>
                        <select className="col-3 form-select" id="dropdown1"
                          onChange={(e) => setBusinessListing(e.target.value)}
                        >
                          <option hidden>Choose...</option>
                          {business_details.map((business) => (
                            <option key={business._id} value={business._id}>
                              {business.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <div class="mt-3  form-check">
                        <input
                          class="fs-5 form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="fs-5 form-check-label" for="flexCheckDefault">
                          Default checkbox
                        </label>
                      </div> */}
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
      </main >
    </>




  );
}

export default AddAdvertisement;
