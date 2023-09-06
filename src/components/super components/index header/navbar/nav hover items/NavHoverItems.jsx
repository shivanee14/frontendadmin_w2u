import React from "react";
import NavMenuItem from "./nav menu item/NavMenuItem";
import TrendingTags from "./trending tags/TrendingTags";

function NavHoverItems() {
  return (
    <>
      <div className="container">
        <NavMenuItem />
        <TrendingTags />
      </div>
    </>
  );
}

export default NavHoverItems;
