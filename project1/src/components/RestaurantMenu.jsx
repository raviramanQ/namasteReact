import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{

     const [hotelData,setHotelData]=useState(null);

     const resId = useParams();
     // console.log("jjjjjjjjjjj",resId.resId);

     useEffect(()=>{
          fetchMenu();
     },[]);

     const fetchMenu = async ()=>{
          // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.90590&lng=75.80780&restaurantId="+resId.resId);
          // return false;
          const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.90590&lng=75.80780&restaurantId="+resId.resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

          const json = await data.json();
          // console.log(json);

          setHotelData(json);

     };

     if(hotelData === null)
     { return 
           <Shimmer></Shimmer>;

     }
     console.log("to checkme", hotelData?.data?.cards[2]?.card?.card?.info?.name);

     // console.log("to check", hotelData?.data?.cards[2]?.card?.card?.info?.name);

     // const {cuisines} = hotelData?.data?.cards[2]?.card?.card?.info;
     // const {name} = {"name":"something"}
     // const name = hotelData?.data?.cards[2]?.card?.card?.info.name;
     // const infor1 = hotelData?.data?.cards[2]?.card?.card?.info
     // console.log("srinagar===>>>>",infor1);

     // const infor = {...hotelData?.data?.cards[2]?.card?.card?.info}
     // console.log("kashmirrr===>>>>",infor);
     // const {name,cuisines} = infor
     // const info = hotelData?.data?.cards[2]?.card?.card?.info;
     const { name,cuisines } = hotelData?.data?.cards[2]?.card?.card?.info;

     return(
<div className="menu">
     <h1>{name}</h1>
     <h2>{cuisines}</h2>
    
</div>

     );
};

export default RestaurantMenu;