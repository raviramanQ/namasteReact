import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart = ()=>{

     const cartItems = useSelector((store) => store.cart.items);
     console.log("cartIItem==",cartItems);
     return(
          <div className="text-center m-4 p-4">
              <h1 className="text-2xl font-bold">Cart</h1>
              <div className="w-6/12 m-auto">
               <ItemList items={cartItems}></ItemList>
              </div>
          </div>
     );
};

export default Cart;