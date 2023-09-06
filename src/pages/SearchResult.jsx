import React from "react";
import { useParams } from "react-router-dom";
import SearchedData from "../components/search result/SearchedData";
import Footer from "../components/super components/footer/Footer";
import OtherHeader from "../components/super components/other header/OtherHeader";

function SearchResult() {
  const params = useParams();


  return (
    <>
      <OtherHeader />
      <SearchedData params={params} />
      <Footer />
    </>
  );
}

export default SearchResult;
