import React from "react";
import { Link } from "react-router-dom";

function SubCategoryItem({ post, params }) {
  const { category_id, category_name, subcategory_id, subcategory_Name } =
    params;

  // console.log(post);
  const {
    businesslisting_companyfirmname,
    id,
    businesslisting_companyfirmlogo,
  } = post;

  return (
    <>
      <div className="card border rounded-2 up-hover p-4 mb-4 mx-auto">
        <div className="row g-3">
          {/* Image */}
          <div
            className="col-12 mx-md-auto col-sm-5 col-md-4"
            style={{ height: "14rem" }}
          >
            <img
              className="rounded-3 h-100 w-100"
              // src="/assets/images/blog/4by3/01.jpg"
              src={businesslisting_companyfirmlogo}
              alt="Los Angeles"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-sm-7 col-md-8">
            <h2 className="card-title">
              <Link
                // href="/category/subcategory/listeditem"
                to={`/${category_name}/${category_id}/${subcategory_Name}/${subcategory_id}/${businesslisting_companyfirmname.replace(
                  /\s/g,
                  "_"
                )}/${id}`}
                className="btn-link text-reset stretched-link"
              >
                {/* Fatehsagar */}
                {post.businesslisting_companyfirmname}
              </Link>
            </h2>
            <p className="">
              {/* For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. */}
              {post.businesslisting_descriptionproductservice}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategoryItem;
