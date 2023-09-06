import React from "react";
import Advertisement from "../components/main components/indexPage component/advertisement/Advertisement";
import HighlightSection from "../components/main components/indexPage component/highlight section/HighlightSection";
import YoutubeVideosSection from "../components/main components/indexPage component/youtube videos section/YoutubeVideosSection";
import Footer from "../components/super components/footer/Footer";
import IndexHeader from "../components/super components/index header/IndexHeader";
import LatestNews from "../components/main components/indexPage component/latest news section/LatestNewsSection";
import MostViewed from "../components/main components/indexPage component/most viewed section/MostViewed";
import OnlineDirectory from "../components/main components/indexPage component/online directory section/OnlineDirectory";
import CategoryCarousel from "../components/super components/index header/category carousel/CategoryCarousel";
import PublicViews from "../components/main components/indexPage component/public views/PublicViews";
import NearbySection from "../components/main components/indexPage component/nearby section/NearbySection";
import SocialMediaSection from "../components/main components/indexPage component/social media section/SocialMediaSection";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function IndexPage() {

  const advertisement_URL = process.env.REACT_APP_GET_ADVERTISEMENT_URL;

  const firstCarousel = [
    {
      subTitle: "Tourist Place1",
      imgUrls: [
        "/assets/images/ud2.jpg",
        "/assets/images/ud3.jpg",
        "/assets/images/ud4.jpg",
      ],
    },
    {
      subTitle: "Tourist Place2",
      imgUrls: [
        "/assets/images/ud1.jpg",
        "/assets/images/ud5.jpg",
        "/assets/images/ud6.jpg",
      ],
    },
    {
      subTitle: "Tourist Place3",
      imgUrls: [
        "/assets/images/ud7.jpg",
        "/assets/images/adv-4.png",
        "/assets/images/ud2.jpg",
      ],
    },
    {
      subTitle: "Destination Wedding",
      imgUrls: [
        "/assets/images/ud4.jpg",
        "/assets/images/ud1.jpg",
        "/assets/images/ud3.jpg",
      ],
    },
  ];

  // get advertisement  
  const [advertisement, setAdvertisement] = useState([])

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");



  const lat = localStorage.getItem("latitude")
  const lon = localStorage.getItem("longitude")

  useEffect(() => {


    if (lat && lon) {
      setLatitude(lat)
      setLongitude(lon)
    }
    else {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
          function (position) {
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
          },
          function (err) {
            console.error(err.message);
          }
        );
      } else {
        console.error("GeoLocation not available.");
      }
    }

  }, [lat, lon])

  const getAdvertisment = async () => {
    try {
      const response = await axios.get(`${advertisement_URL}/?longitude=${longitude}&latitude=${latitude}`);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (longitude && latitude) {
      // getAdvertisment()

    }
  }, [longitude, latitude])


  return (
    <>
      <IndexHeader />
      <CategoryCarousel />
      <MostViewed subTitle={firstCarousel} title={"Most Viewed"} />
      <NearbySection />
      <Advertisement />
      <OnlineDirectory subCategoryData={firstCarousel} />
      <HighlightSection />
      <LatestNews />
      <Advertisement />
      <PublicViews />
      {/* <Advertisement /> */}
      <Advertisement />
      <SocialMediaSection />
      <YoutubeVideosSection />
      <Footer />
    </>
  );
}

export default IndexPage;
