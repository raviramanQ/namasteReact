import RestaurantCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnLineStatus";
// import data_json from "../utils/MockData"; no longer need this now 
// console.log(useOnlineStatus);

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

const onLineStatus = useOnlineStatus();
// console.log(onLineStatus);
if(onLineStatus === false)
{
    return(
     <h2>Sorry Your internet connection is off</h2>
    ) ;
};

if(ListofRestaurants.length === 0)
{
//     return <h1>Loading...</h1>;
return <Shimmer></Shimmer>;

}

     return (
          <div className="body">
               <div className="filter flex">
                    <div className="search m-4 p-4">
                         <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e)=>{
                              setSearchData(e.target.value);
                         }}></input>
                         <button 
                         className="px-4 py-2 bg-green-100 m-4 rounded-xl"
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
                    <div className="search m-4 p-4 flex items-center">

                    <button className="px-4 py-2 bg-gray-100 rounded-xl" onClick={()=>{
                        const data_json2 = ListofRestaurants.filter((res) => res.info.avgRating > 4.3);
                        setFilterRestaurant(data_json2);
                         // console.log('kkkkkkkkkkkkkkkkkkkk',ListofRestaurants);

                    }}> Top Rated Restaurants </button>
                    </div>

               </div>
               <div className="flex flex-wrap">
                    
                    {/* <RestaurantCard
                    resData = {ListofRestaurants[0]}
                    /> */}

                    {
                       FilterRestaurant.map((datas)=>(
                         <Link 
                         key={datas.info.id} 
                         to={"/restaurant/"+ datas.info.id}>
                       <RestaurantCard  resData={datas}/>
                       </Link>
                       ))
                    }
                    

                     
               </div>
          </div>
     );
};

export default Body;