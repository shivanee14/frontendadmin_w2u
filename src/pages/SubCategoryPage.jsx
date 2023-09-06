import React from "react";
import { useParams } from "react-router-dom";
import SubCategorySection from "../components/main components/subCategoryPage component/sub category section/SubCategorySection";
import Footer from "../components/super components/footer/Footer";
import OtherHeader from "../components/super components/other header/OtherHeader";

function SubCategoryPage() {
  const params = useParams();
  // console.log(params);
  return (
    <>
      <OtherHeader />
      <SubCategorySection params={params} />
      <Footer />
    </>
  );
}

export default SubCategoryPage;
