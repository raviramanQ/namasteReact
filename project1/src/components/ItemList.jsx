import { CDN_PATH } from "../utils/Constant";
const ItemList = ({items}) => {
     console.log('items==>>>',items);
     return(
          <div>

               {items.map((item)=>(
                    <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-400 border-b-2 text-left flex"
                    >
                         <div className="w-9/12">

                         <div className="py-2">
                         <span className="font-medium">{item.card.info.name}</span>
                         <span> - Rs {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                         </div>
                         <p className="text-xs">{item.card.info.description}</p>
                         </div>
                         <div className="w-3/12 p-4"> 
                         <div className="absolute">
                         <button className="p-2 bg-white shadow-lg m-auto"> Add +</button>
                          </div>
                         <img src={CDN_PATH + item.card.info.imageId} className="w-full" />
                         </div>
                         </div>

               ))}
          </div>
     );
};

export default ItemList;