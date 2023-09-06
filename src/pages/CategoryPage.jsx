import React from "react";
import { useParams } from "react-router-dom";
import CategorySection from "../components/main components/categoryPage component/catogory section/CategorySection";
import Footer from "../components/super components/footer/Footer";
import OtherHeader from "../components/super components/other header/OtherHeader";
import Rough from "../components/super components/rough components/Rough";

function CategoryPage() {
  const params = useParams();

  return (
    <>
      <OtherHeader />
      <CategorySection params={params} />
      <Footer />
    </>
  );
}

export default CategoryPage;
