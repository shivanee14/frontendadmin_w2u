import React, { useEffect, useState } from 'react';
import axios from "axios";

function ListSocialMeida() {
  const SOCIAL_MEDIA_API = process.env.REACT_APP_SOCIAL_MEDIA_URL;

  const [socials, setSocials] = useState([]);
  if(socials)
  {
    console.log(socials);
  }

//   useEffect(() => {
//     const response = axios.get(SOCIAL_MEDIA_API);
//     console.log(response);
//     setSocials(response);
//   }, []);

const fetchSocial = async () => {
    try {
      const response = await axios.get(SOCIAL_MEDIA_API);
      console.log(response);
      setSocials(response.data);
      if(response) { console.log(response);
  }
      // console.log(response);
     //  setSocials(response.data);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchSocial();
  }, []);

  return (
    <div>ListSocialMeida</div>
  )
}

export default ListSocialMeida