import { CDN_PATH } from "../utils/Constant";

const RestaurantCard = (props) => {
     // console.log("=======>>>>",props);
     return (
<div className=" m-2 p-2 w-[200px] rounded-lg " >
<img 
className=" rounded-lg"
alt = "res-logo"
width="200px"
height="150px"
 src={CDN_PATH+props.resData.info.cloudinaryImageId}></img>

     <h3 className="font-bold py-2 text-lg"> {props.resData.info.name}</h3>
     {/* <div className="cuisines-container">

     <h4> {props.resData.info.cuisines.join(",")}</h4> 
     </div> */}

     <h4>{props.resData.info.cuisines.slice(0, 3).join(", ")}</h4>
            {props.resData.info.cuisines.length > 3 &&
                <h4>And more...</h4>
            }
     <h4> {props.resData.info.avgRatingString} Stars</h4>
     <h4> {props.resData.info.sla.slaString}</h4>

      
</div>
     );
};

export const withPromotedLabel = (RestaurantCard) => {
     return (props) => {
          return (
               <div>
                    <label className="absolute bg-red-600 text-white m-0 p-1 rounded-lg">Promoted</label>
                    <RestaurantCard {...props} />
               </div>
          );
     };
};

export default RestaurantCard;