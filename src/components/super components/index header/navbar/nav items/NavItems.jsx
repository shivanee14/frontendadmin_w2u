import React from "react";
import { Link } from "react-router-dom";

function NavItems({ navitem }) {
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          // to="/category"
          // to={`/category/${navitem.id}`}
          to={`/${navitem.name.replace(/\s/g, "_")}/${navitem._id}`}
          // id={`${navitem.name}`}
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {navitem.name}
        </Link>
        {/* <div
          className="dropdown-menu"
          aria-labelledby={`${navitem.name}`}
        >
          <NavHoverItems />
        </div> */}
      </li>
    </>
  );
}

export default NavItems;
