import axios from "axios";
import { useState, useEffect } from "react";

function Location() {
  const business_listing_URL = process.env.REACT_APP_BUSINESS_LISTING;

  const [data, setData] = useState([]);
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(business_listing_URL);

      const data = await response.data;

      const filteredData = data.filter((item) => {
        const distance = getDistanceFromLatLonInKm(
          userLocation.latitude,
          userLocation.longitude,
          item.businesslisting_latitude,
          item.businesslisting_longitude
        );
        return distance <= 1;
      });

      setData(filteredData);
    };
    fetchData();
  }, [userLocation]);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  if (data) {
    // console.log(data);
  }
  return null;
}
export default Location;
