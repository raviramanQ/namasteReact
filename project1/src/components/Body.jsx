import RestaurantCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
// import data_json from "../utils/MockData"; no longer need this now 

const Body = () => {

// Local state Variable -> super powerful variable
// const [data_json1,setJsondata] = useState(data_json);  no longer need this

const [data_json1,setJsondata] = useState([]); 
console.log(data_json1);

useEffect(()=>{
     fetchData();
// console.log("ravi test");
},[]);

const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225");
// console.log('llllllllllllll',data);return;
     const mmmm = await data.json();
     console.log(mmmm);
     console.log('new=====>>>>>>',mmmm.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);


     setJsondata(mmmm?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

if(data_json1.length === 0)
{
//     return <h1>Loading...</h1>;
return <Shimmer></Shimmer>;

}

     return (
          <div className="body">
               <div className="filter">

                    <button className="filter-btn" onClick={()=>{
                        const data_json2 = data_json1.filter((res) => res.info.avgRating > 4.3);
                         setJsondata(data_json2);
                         // console.log('kkkkkkkkkkkkkkkkkkkk',data_json1);

                    }}> Top Rated Restaurants </button>
               </div>
               <div className="res-container">
                    
                    {/* <RestaurantCard
                    resData = {data_json1[0]}
                    /> */}

                    {
                       data_json1.map((datas)=>(<RestaurantCard key={datas.info.id}  resData={datas}/>))
                    }
                    

                     
               </div>
          </div>
     );
};

export default Body;