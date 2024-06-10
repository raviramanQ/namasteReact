// import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{

     // const [resInfo,setResInfo]=useState(null);

     const resId = useParams();
     // console.log("jjjjjjjjjjj",resId.resId);

     const resInfo = useRestaurantMenu(resId);


     

     // useEffect(()=>{
     //      fetchMenu();
     // },[]);

     // const fetchMenu = async ()=>{
     //      // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.90590&lng=75.80780&restaurantId="+resId.resId);
     //      // return false;
     //      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.90590&lng=75.80780&restaurantId="+resId.resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

     //      const json = await data.json();
     //      // console.log(json);

     //      setResInfo(json);

     // };

     if(resInfo === null)
     { return 
           <Shimmer></Shimmer>;

     }
     // console.log("to checkme", resInfo?.data?.cards[2]?.card?.card?.info?.name);

     // console.log("to check", resInfo?.data?.cards[2]?.card?.card?.info?.name);

     // const {cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
     // const {name} = {"name":"something"}
     // const name = resInfo?.data?.cards[2]?.card?.card?.info.name;
     // const infor1 = resInfo?.data?.cards[2]?.card?.card?.info
     // console.log("srinagar===>>>>",infor1);

     // const infor = {...resInfo?.data?.ca rds[2]?.card?.card?.info}
     // console.log("kashmirrr===>>>>",infor);
     // const {name,cuisines} = infor
     // const info = resInfo?.data?.cards[2]?.card?.card?.info;
     const { name,cuisines,costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

     // console.log('dataRestaurant1234===>>>', resInfo?.data?.cards[2]?.card?.card?.info);


     console.log('dataRestaurant===>>>',resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

     const categories = resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
console.log('category=====>>>>',categories);
     return(
     <div className="text-center">
     <h1 className="font-bold my-6 text-2xl">{name}</h1>
     <p className="font-bold text-lg">
       {cuisines.join(" , ")}-{costForTwoMessage}
     </p>
     {
          categories.map((category)=>(
               <RestaurantCategory data={category.card.card}/>
          ))
     }

    
</div>

     );
};

export default RestaurantMenu;