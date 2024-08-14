import React from "react";
import ItemList from "./ItemList";
const RestaurantCategories = ({ data,showItems ,setShowIndex}) => {

  const handleclick = () => {
    setShowIndex();
  };

  return (
    <>
      <div className="card-container">
        <div className="card-item" onClick={handleclick}>
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="click">@</span>
          {showItems && <ItemList item={data.itemCards} />}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategories;
