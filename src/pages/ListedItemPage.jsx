import React from "react";
import { useParams } from "react-router-dom";
import ListedItem from "../components/main components/listeditemPage component/listed item section/listed item/ListedItem";
import Footer from "../components/super components/footer/Footer";
import OtherHeader from "../components/super components/other header/OtherHeader";

function ListedItemPage() {
  const params = useParams();
  return (
    <>
      <OtherHeader />
      <ListedItem params={params} />
      <Footer />
    </>
  );
}

export default ListedItemPage;
