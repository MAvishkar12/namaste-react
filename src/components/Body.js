import RestaurantCard, { OpenRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {Button} from "@mui/material"
import TextField from '@mui/material/TextField';


const Body = () => {
  const [listRestaurant, setlistResturnat] = useState([]);
  const [featureRestaurant, setfeatureResturant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  console.log(listRestaurant);

  const RestaurantOpen = OpenRestaurantCard(RestaurantCard);

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
      <TextField id="outlined-basic" label="Search" size="small"
          type="text"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)} variant="outlined" />
       
        <Button
          className="search-btn"
          variant="contained"
          color="success"
          sx={{marginLeft:'10px'}}
          onClick={() => {
            setfeatureResturant(
              listRestaurant.filter((val) =>
                val.info.name.toLowerCase().includes(SearchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </Button>
      </div>
      <div className="feature-container">
        <div className="filter">
          <Button
            className="filter-btn"
            variant="outlined"
            sx={{margin:"5px"}}
            size="small"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Resturants
          </Button>
        </div>
        <div className="filter">
          <Button
           variant="outlined"
           sx={{margin:"5px"}}
           size="small"
            className="filter-btn"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.sla.deliveryTime <= 20)
              );
            }}
          >
            Near
          </Button>
        </div>
        <div className="filter">
          <Button
           variant="outlined"
           sx={{margin:"5px"}}
           size="small"
            className="filter-btn"
            onClick={() => {
              setfeatureResturant(
                listRestaurant.filter((val) => val.info.sla.deliveryTime >= 35)
              );
            }}
          >
            Long
          </Button>
        </div>
      </div>
      <div className="resto-container">
        {featureRestaurant.map((value) => (
          <Link to={"/rest/" + value.info.id} key={value.info.id} className="link">
            {value.info.availability.opened ? (
              <RestaurantOpen resdata={value} />
            ) : (
              <RestaurantCard resdata={value}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Body;
