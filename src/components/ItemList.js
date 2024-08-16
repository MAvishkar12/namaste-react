import React from "react";
import { Cloud_Id } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
const ItemList = ({ item }) => {


  const dispatch=useDispatch();
  const handleAdd=(val)=>{
     dispatch(addItem(val))
  }

  
  return (
    <>
      {item.map((val) => (
        <div key={val.card.info.id} className="item-body">
          <div>
            <img
              alt="food-image"
              className="item-img"
              src={Cloud_Id + val.card.info.imageId}
            ></img>
            <button className="item-btn" onClick={()=>handleAdd(val)}>Add+</button>
          </div>
          <div className="item-info ">
            <span className="item-h1">
              {val.card.info.name} -Rs.
              {val.card.info.price
                ? val.card.info.price / 100
                : val.card.info.defaultPrice / 100}
            </span>
            <p className="item-para">{val.card.info.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
