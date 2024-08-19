import React from "react";
import { Cloud_Id } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Cloud_Id } from "../utils/constant";
const ItemList = ({ item }) => {
  const theme = useTheme();

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
            <Button variant="contained" color="success" className="item-btn" onClick={()=>handleAdd(val)}>Add+</Button>
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
