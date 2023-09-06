import React, { useState, useEffect } from "react";
import axios from "axios";

import CardItem from "./card item/CardItem";

function MostViewed({ subCategoryData, title, subTitle }) {
  const category_URL = process.env.REACT_APP_CATEGORY_URL;
  // eslint-disable-next-line
  const [cardItem, setCardItem] = useState([]);

  // set card item details

  useEffect(() => {
    const getCardItem = async () => {
      try {
        const response = await axios.get(category_URL);
        setCardItem(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCardItem();
  }, []);

  return (
    <>
      {/* Main hero START */}

      <section className=" card-grid pb-1 pt-3">
        <div className="container-fluid px-4">
          <div className="row g-4">
            <div className="section-heading">
              <h2>{title}</h2>
            </div>
            {/* {console.log(cardItem)} */}
            <CardItem subTitle={subTitle} />
          </div>
        </div>
      </section>

      {/* Main hero END */}
    </>
  );
}

export default MostViewed;
