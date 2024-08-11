import React from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
function RestaurantMenu() {
  const { resid } = useParams();

  const restInfo = useRestaurantMenu(resid);

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
