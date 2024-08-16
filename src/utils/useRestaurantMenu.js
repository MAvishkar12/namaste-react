import { useEffect, useState } from "react";
import { Menu_data } from "./constant";

const useRestaurantMenu = (resid) => {
  const [restInfo, setrestInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let data = await fetch(Menu_data + resid);
    let Jsondata = await data.json();
    setrestInfo(Jsondata.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
