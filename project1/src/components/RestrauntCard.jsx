import { CDN_PATH } from "../utils/Constant";

const RestaurantCard = (props) => {
     // console.log("=======>>>>",props);
     return (
<div className="res-card" >
<img 
className="res-logo"
alt = "res-logo"
 src={CDN_PATH+props.resData.info.cloudinaryImageId}></img>

     <h3> {props.resData.info.name}</h3>
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

export default RestaurantCard;