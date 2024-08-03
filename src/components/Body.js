import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listRestaurant, setlistResturnat] = useState(data);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistResturnat(
              listRestaurant.filter((val) => val.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resto-container">
        {listRestaurant.map((value) => {
          return <RestaurantCard resdata={value} />;
        })}
      </div>
    </div>
  );
};

export default Body;
