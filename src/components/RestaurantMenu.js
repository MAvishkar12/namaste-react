import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_data } from "../utils/constant";
function RestaurantMenu() {
  const [restInfo, setrestInfo] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let data = await fetch(Menu_data + resid);
    let Jsondata = await data.json();
    console.log(Jsondata);
    console.log(Jsondata?.data?.cards[2]?.card?.card?.info?.areaName);
    setrestInfo(Jsondata?.data);
  };

  if (restInfo === null) return <Shimmer />;
  const { name, areaName, costForTwoMessage, cuisines } =
    restInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1> Restaurant Name :{name}</h1>
      <h2>Location :{areaName} </h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      {itemCards[0].card.info.category}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.category} -{"Rs"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
