import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
     console.log('data===>>>',data);
     // console.log('datammmm===>>>',data.showItem);

     // const showItems = data.showItem;


     // const [showItem,setShowItem] = useState(false);

     const handleClick = ()=>{
          console.log('raja means self pain ');

          data.setShowIndex();


     }
     return (
<div>
     {/*Header*/ }
     <div className="w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
       <span className="font-bold text-lg">{data?.data?.title} ({data?.data?.itemCards.length})</span>
       <span>⬇️</span>
       </div>
       {data.showItem && <ItemList items= {data.data.itemCards}/>}

     </div>
     {/*Accordion Body*/ }

</div>
     );
};

export default RestaurantCategory;