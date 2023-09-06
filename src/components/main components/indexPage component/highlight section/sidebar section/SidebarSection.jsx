import React from "react";
import SocialIcons from "./Social Icons/SocialIcons";
import TrendingTopics from "./Trending topics/TrendingTopics";

function SidebarSection() {
  const trendingItems = [
    {
      backgroundImage: "/assets/images/blog/4by3/01.jpg",
      topic: "Travel",
    },
    {
      backgroundImage: "/assets/images/blog/4by3/02.jpg",
      topic: "Business",
    },
    {
      backgroundImage: "/assets/images/blog/4by3/03.jpg",
      topic: "Marketing",
    },
    {
      backgroundImage: "/assets/images/blog/4by3/04.jpg",
      topic: "Photography",
    },
    {
      backgroundImage: "/assets/images/blog/4by3/05.jpg",
      topic: "Sports",
    },
  ];

  return (
    <>
      <div className="col-lg-3">
        {/* <SocialIcons /> */}
        <div className="mt-5 d-none d-lg-block card-img-flash">
          {/* <a href="#" className="d-block"> */}
          <img src="/assets/images/adv.png" className=" h-100" alt="Ad" />
          {/* </a> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default SidebarSection;
