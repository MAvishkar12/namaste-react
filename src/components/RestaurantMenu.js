import React from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

function RestaurantMenu() {
  const { resid } = useParams();

  const restInfo = useRestaurantMenu(resid);

  if (restInfo === null) return <Shimmer />;
  const { name, cuisines } = restInfo?.cards[2]?.card?.card?.info;

  const categerious =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (v) =>
        v.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="card-box">
        <h1 className="rest-name"> {name}</h1>
        <h2 className="card-cusine">{cuisines.join(",")}</h2>
        <h2 className="card-head">Menu</h2>
      </div>
      {categerious.map((val, index) => (
        <RestaurantCategories key={index} data={val?.card?.card} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
