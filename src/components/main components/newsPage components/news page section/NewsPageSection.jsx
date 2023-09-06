import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../../../super components/pagination/Pagination";
import SidebarSection from "../../indexPage component/highlight section/sidebar section/SidebarSection";
import NewsItem from "./news item/NewsItem";

function NewsPageSection() {
  const news_URL = process.env.REACT_APP_NEWS_URL;
  // const category_URL = process.env.REACT_APP_CATEGORY_URL;


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(news_URL);
        setPosts(res.data);
        // console.log(res);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);




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
        <section className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-primary bg-opacity-10 p-4 p-md-5 rounded-3 text-center">
                  <h1 className="text-primary">News Section</h1>
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
                      <li className="breadcrumb-item active">News</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*section 1 start*/}
        <section className="position-relative pt-0 pt-md-3">
          <div className="container">
            <div className="row">
              {/* Main Post START */}
              <div className="col-lg-9 mx-auto">
                {currentPosts && currentPosts.map((item, index) => {
                  return <NewsItem post={item} key={index} />;
                  // return console.log("post", item);
                })}

                {/* pagination */}
                <Pagination paginate={paginate} pageCount={pageCount} />
              </div>
              {/* <SidebarSection /> */}
            </div>
          </div>
        </section>
      </main >

      {/* **************** MAIN CONTENT END **************** */}
    </>
  );
}

export default NewsPageSection;
