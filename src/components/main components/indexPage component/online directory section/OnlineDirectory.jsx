import React from "react";

import CardItem from "./card item/CardItem";

function OnlineDirectory({ subCategoryData }) {
  return (
    <>
      <section className=" card-grid pb-1 pt-3">
        <div className="container-fluid px-4">
          <div className="row g-4 ">
            <div className="section-heading">
              <h2>Online Directory</h2>
            </div>
            <CardItem subCategoryData={subCategoryData} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OnlineDirectory;
