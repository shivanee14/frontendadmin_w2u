import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarSection from "../../indexPage component/highlight section/sidebar section/SidebarSection";
import SubCategoryItem from "./sub category item/SubCategoryItem";
import Pagination from "../../../super components/pagination/Pagination";

function SubCategorySection({ params }) {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING;

  // subcategory data
  const subcategoryName = params.subcategory_Name.replace(/_/g, " ");
  const subcategory_id = params.subcategory_id;
  // category data

  const categoryName = params.category_name.replace(/_/g, " ");

  // const categoryName = categoryData.find(
  //   (item) => item.id == params.category_id
  // );

  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // getting business data

  const posts = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(business_listing_URL);
        setBusinessData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // if (businessData.length > 0) {
  //   console.log(businessData);
  // }

  businessData.map((item) => {
    // console.log(item.businesslisting_subcategoryName);
    if (subcategory_id == item.businesslisting_subcategoryName) {
      posts.push(item);
    }
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // total number of pages
  const pageCount = Math.ceil(posts.length / postsPerPage);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        {/* Inner intro START */}
        <section className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-primary bg-opacity-10 p-4 p-md-5 rounded-3 text-center">
                  {subcategoryName ? (
                    <h1 className="text-primary">{subcategoryName}</h1>
                  ) : (
                    ""
                  )}
                  <nav
                    className="d-flex justify-content-center"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb breadcrumb-dots m-0">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="bi bi-house me-1" /> Home
                        </a>
                      </li>
                      {categoryName ? (
                        <li className="breadcrumb-item active">
                          {categoryName}
                        </li>
                      ) : (
                        ""
                      )}
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inner intro END */}

        <>
          {/* Main content START */}

          {/*****section 1 start*/}
          <section className="position-relative pt-0 pt-md-3">
            <div className="container">
              <div className="row">
                {/* Main Post START */}
                <div className="col-lg-9">
                  {currentPosts.map((item, index) => {
                    return (
                      <SubCategoryItem
                        post={item}
                        key={index}
                        params={params}
                      />
                    );
                    // return console.log(item);
                  })}

                  {/* Load more */}
                  {/* <button
                    type="button"
                    className="btn btn-primary-soft mx-auto"
                  >
                    Load more post
                    <i className="bi bi-arrow-down-circle ms-2 align-middle" />
                  </button> */}

                  {/* pagination */}
                  <Pagination paginate={paginate} pageCount={pageCount} />
                </div>
                <SidebarSection />
              </div>
            </div>
          </section>
        </>
      </main>

      {/* **************** MAIN CONTENT END **************** */}
    </>
  );
}

export default SubCategorySection;
