import RestaurantCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
// import data_json from "../utils/MockData"; no longer need this now 

const Body = () => {

// Local state Variable -> super powerful variable
// const [ListofRestaurants,setListOfRestaurants] = useState(data_json);  no longer need this

const [ListofRestaurants,setListOfRestaurants] = useState([]); 
const [FilterRestaurant,setFilterRestaurant] = useState([]); 

const [searchText,setSearchData] = useState(""); 

// whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
console.log("ravi test");

// console.log(ListofRestaurants);

useEffect(()=>{
     fetchData();
// console.log("ravi test");
},[]);

const fetchData = async () =>{
     const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225");

     const mmmm = await data.json();
   
     setListOfRestaurants(mmmm?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilterRestaurant(mmmm?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

};

if(ListofRestaurants.length === 0)
{
//     return <h1>Loading...</h1>;
return <Shimmer></Shimmer>;

}

     return (
          <div className="body">
               <div className="filter">
                    <div className="search-box-com">
                         <input type="text" className="search-box" vlaue = {searchText} onChange={(e)=>{
                              setSearchData(e.target.value);
                         }}></input>
                         <button 
                         onClick={(e)=>{

                              // console.log('line onclick==>>',searchText);
                              // setListOfRestaurants(searchText);

                              const FilterRestaurant = ListofRestaurants.filter(
                                   (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                              );
                              setFilterRestaurant(FilterRestaurant);
                         }}
                         >
                          Search</button>
                    </div>

                    <button className="filter-btn" onClick={()=>{
                        const data_json2 = ListofRestaurants.filter((res) => res.info.avgRating > 4.3);
                        setFilterRestaurant(data_json2);
                         // console.log('kkkkkkkkkkkkkkkkkkkk',ListofRestaurants);

                    }}> Top Rated Restaurants </button>
               </div>
               <div className="res-container">
                    
                    {/* <RestaurantCard
                    resData = {ListofRestaurants[0]}
                    /> */}

                    {
                       FilterRestaurant.map((datas)=>(<RestaurantCard key={datas.info.id}  resData={datas}/>))
                    }
                    

                     
               </div>
          </div>
     );
};

export default Body;