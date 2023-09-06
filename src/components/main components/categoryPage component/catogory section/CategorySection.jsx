import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./category item/CategoryItem";
import Pagination from "../../../super components/pagination/Pagination";
import SidebarSection from "../../../main components/indexPage component/highlight section/sidebar section/SidebarSection";

function CategorySection({ params }) {
  const subcategory_URL = process.env.REACT_APP_SUBCATEGORY_URL;
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  const posts = [];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // category item
  // parms value
  const category_id = params.category_id;
  // console.log(category_id);

  // delete this code
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(subcategory_URL);
        setApidata(res.data);
      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // category name showing on the top bar
  // set category items
  // const categoryName = categoryData.find((item) => item.id == category_id);
  const categoryName = params.category_name.replace(/_/g, " ");

  // getting category name process end

  apidata.map((item) => {
    if (item.cat_id == category_id) {
      posts.push(item);
      // setPosts(item);
    }
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log("currentPosts", currentPosts);
  // Change page
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // total number of pages
  const pageCount = Math.ceil(posts.length / postsPerPage);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // navigate to home route on onknown url

  return (
    <>
      <main>
        {/* Inner intro START */}
        <section className="pt-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="border p-4 text-center rounded-3">
                  {/* <h1>Post list style</h1> */}
                  {categoryName ? <h1>{categoryName}</h1> : ""}
                  <nav
                    className="d-flex justify-content-center"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb breadcrumb-dots m-0">
                      <li className="breadcrumb-item">
                        <a href="/">
                          <i className="bi bi-house me-1" /> Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active">All post</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inner intro END */}

        {/* Main content START */}
        <section className="position-relative pt-0">
          <div className="container" data-sticky-container>
            <div className="row">
              {/* Main Post START */}
              <div className="col-lg-9">
                {currentPosts.map((item, index) => {
                  return (
                    <CategoryItem key={index} post={item} params={params} />
                  );
                  // console.log(item)
                })}
                <Pagination paginate={paginate} pageCount={pageCount} />
              </div>
              <SidebarSection />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CategorySection;
