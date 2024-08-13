import RestaurantCard ,{OpenRestaurantCard}from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listRestaurant, setlistResturnat] = useState([]);
  const [featureRestaurant, setfeatureResturant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  console.log(listRestaurant);
  
  const RestaurantOpen=OpenRestaurantCard(RestaurantCard);

  const OnlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.530263&lng=73.84985879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const Jsondata = await data.json();

    setlistResturnat(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfeatureResturant(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (OnlineStatus === false) {
    return <h1>Check you internet Connection!!!!</h1>;
  }

  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <input
          className="search-input"
          type="text"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            setfeatureResturant(
              listRestaurant.filter((val) =>
                val.info.name.toLowerCase().includes(SearchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="feature-container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.sla.deliveryTime <=20)
              );
            }}
          >
            Near
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.sla.deliveryTime >= 35)
              );
            }}
          >
            Long
          </button>
        </div>
      </div>
      <div className="resto-container">
        {featureRestaurant.map((value) => (
          <Link to={"/rest/" + value.info.id} key={value.info.id}>
            {
              value.info.availability.opened?<RestaurantOpen resdata={value} /> :<RestaurantCard resdata={value}></RestaurantCard>
            }
             
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
