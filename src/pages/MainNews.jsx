import React from "react";
import { useParams } from "react-router-dom";
import News from "../components/main components/newsPage components/news page section/news item/news/News";
import Footer from "../components/super components/footer/Footer";
import OtherHeader from "../components/super components/other header/OtherHeader";

function MainNews() {
  const params = useParams();
  return (
    <>
      <OtherHeader />
      <News params={params} />
      <Footer />
    </>
  );
}

export default MainNews;
