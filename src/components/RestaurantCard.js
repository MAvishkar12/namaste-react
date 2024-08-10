import { Cloud_Id } from "../utils/constant";
import React from "react";
const RestaurantCard = (props) => {
  const { resdata } = props;

  const {
    name,
    cuisines,
    areaName,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    sla,
  } = resdata?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={Cloud_Id + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{areaName}</h4>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.deliveryTime} min</h3>
    </div>
  );
};

export default RestaurantCard;
