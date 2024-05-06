import RestaurantCard from "./RestrauntCard";
import { useState } from "react";
import data_json from "../utils/MockData";

const Body = () => {

// Local state Variable -> super powerful variable
const [data_json1,setJsondata] = useState(data_json); 
console.log(data_json1);

     return (
          <div className="body">
               <div className="filter">

                    <button className="filter-btn" onClick={()=>{
                        const data_json2 = data_json1.filter((res) => res.info.avgRating > 4.5);
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