import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [listRestaurant, setlistResturnat] = useState([]);
  const [featureRestaurant, setfeatureResturant] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.530263&lng=73.84985879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const Jsondata = await data.json();
    console.log(Jsondata);

    setlistResturnat(
      Jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfeatureResturant(
      Jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

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
                listRestaurant.filter((val) => val.info.sla.deliveryTime <= 35)
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
        {featureRestaurant.map((value) => {
          return <RestaurantCard key={value.info.id} resdata={value} />;
        })}
      </div>
    </div>
  );
};

export default Body;
