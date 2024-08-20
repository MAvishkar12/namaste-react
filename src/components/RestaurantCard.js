import { Cloud_Id } from "../utils/constant";
import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import IconButton from "@mui/material/IconButton";
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
    <Card
      variant="outlined"
      sx={{
        width: 320,
        marginLeft: 6,
        marginTop: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor:"#80cbc4",
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={Cloud_Id + cloudinaryImageId}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt="food"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{name}</Typography>
        <Typography level="body-sm">{cuisines.join(" , ")}</Typography>
        <Rating
          name="half-rating-read"
          defaultValue={avgRating}
          precision={0.5}
          readOnly
        ></Rating>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            <IconButton
              color="secondary"
              size="small"
              aria-label="add to shopping cart"
            >
              <AddLocationIcon />
            </IconButton>
            {areaName}
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
            sx={{ mt: 1 }}
          >
            {costForTwo}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
// HOC
export const OpenRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
