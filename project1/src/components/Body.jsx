import RestaurantCard from "./RestrauntCard";
import data_json from "../utils/MockData";

const Body = () => {
     return (
          <div className="body">
               <div className="Search">Search</div>
               <div className="res-container">
                    
                    {/* <RestaurantCard
                    resData = {data_json[0]}
                    /> */}

                    {
                       data_json.map((datas)=>(<RestaurantCard key={datas.info.id}  resData={datas}/>))
                    }
                    

                     
               </div>
          </div>
     );
};

export default Body;