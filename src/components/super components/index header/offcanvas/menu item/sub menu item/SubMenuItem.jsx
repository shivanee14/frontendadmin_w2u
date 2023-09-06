import React from "react";

function SubMenuItem({ subMenuItem, category_id, category_name }) {
  return (
    <>
      <li className="text-wrap">
        <a
          // data-bs-dismiss="offcanvas"
          className="dropdown-item"
          href={`/${category_name.replace(
            /\s/g,
            "_"
          )}/${category_id}/${subMenuItem.name.replace(
            /\s/g,
            "_"
          )}/${subMenuItem._id}`}
        >
          {subMenuItem.name}
        </a>
      </li>
    </>
  );
}

export default SubMenuItem;
