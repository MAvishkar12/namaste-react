import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Cloud_Id } from "../utils/constant";
import Box from '@mui/material/Box';

const About = () => {
  const [listRestaurant, setlistResturnat] = useState([]);

 
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
  }

 
  
  

  return (
    <div style={{marginTop:'130px',display:'flex' ,flexDirection:'column',justifyContent:'center' ,alignContent:'center',scrollbarColor:'auto',backgroundColor:'#fafafa'}}>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey',textAlign:'center',fontSize:'10', boxShadow: 'inset 0px 4px 10px rgba(0, 0, 255, 0.5)',position:"sticky" }}>
      Top Most Resturants in Pune City..!
    </Box>
      <ImageList sx={{ width: 800, height: 850,marginLeft:30, boxShadow: '0px 4px 10px rgba(255, 0, 0, 0.5)' }}>
        {listRestaurant.map((item) => (
          <ImageListItem key={item?.info?.id}>
            <img
              srcSet={`${Cloud_Id + item?.info?.cloudinaryImageId }?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${Cloud_Id + item?.info?.cloudinaryImageId}?w=248&fit=crop&auto=format`}
              alt={item.info?.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.info?.name}
              subtitle={<span>by: {item?.info?.areaName}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default About;
