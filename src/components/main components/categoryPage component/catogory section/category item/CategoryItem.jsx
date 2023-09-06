import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ post, params }) {

  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const category_name = params.category_name;
  const category_id = params.category_id;

  return (
    <>
      {/* Card item START */}
      <div className="card mb-4">
        <div className="row">
          <div
            className="mx-auto col-10 col-sm-5 col-md-4 rounded-circle"
            style={{ height: "13rem" }}
          >
            <img
              className="rounded-3 w-100 h-100"
              // src="/assets/images/blog/4by3/01.jpg"
              // src={post.images}
              src={`${domain_URL}${post.images}`}
              alt="subcategory image"
            />
          </div>
          <div className="col-sm-7 col-md-8 mt-3 mt-md-0">
            <h3>
              <Link
                // to={`/category/${post.subcategory_category}/${post.subcategory_Name}`}
                to={`/${category_name}/${category_id}/${post.subcategory_Name.replace(
                  /\s/g,
                  "_"
                )}/${post._id}`}
                className="btn-link stretched-link text-reset"
              >
                {post.subcategory_Name}
              </Link>
            </h3>
            <p>{post.subcategory_contant}</p>
          </div>
        </div>
      </div>
      {/* Card item END */}
    </>
  );
}

export default CategoryItem;
