import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SubMenuItem from "./sub menu item/SubMenuItem";

function MenuItem({ navitem, category_URL }) {
  const [subCategory, setSubCategory] = useState([]);
  // set sub category link subMenu item
  // console.log(navitem);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${category_URL}/${navitem._id}/subcategories`
        );
        setSubCategory(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [navitem]);

  return (
    <>
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <li className="nav-item">
          {navitem && (
            <a
              href={`/${navitem.name.replace(/\s/g, "_")}/${navitem._id}`}
              className="nav-link ps-0"
              id={`${navitem.name}`}
              // data-bs-dismiss="offcanvas"
              // aria-expanded="false"
            >
              <strong>{navitem.name}</strong>
            </a>
          )}
          <ul className="" aria-labelledby={`${navitem.name}`}>
            {subCategory &&
              subCategory.map((item, index) => {
                return (
                  <SubMenuItem
                    subMenuItem={item}
                    category_id={navitem._id}
                    category_name={navitem.name}
                    key={index}
                  />
                );
              })}

            {/* {[navitem].map((item) => {
              return subCategory.map((subMenuItem, index) =>
                item._id === subMenuItem.cat_id ? (
                  <SubMenuItem
                    subMenuItem={subMenuItem}
                    category_id={item._id}
                    category_name={item.category_name}
                    key={index}
                    />
                    ) : ""
                    );
                  })} */}
          </ul>
        </li>
      </div>
    </>
  );
}

export default MenuItem;
