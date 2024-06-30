import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { UseDispatch } from "react-redux";

const Cart = ()=>{

     const cartItems = useSelector((store) => store.cart.items);
     console.log("cartIItem==",cartItems);

     const dispatch = useDispatch();

     const handleClearCart = ()=>{
          dispatch(clearCart());
     };

     return(
          <div className="text-center m-4 p-4">
               <div>
              <span className="text-4xl font-bold text-purple-950 bg-amber-200">CART ITEMS</span>
              <span><button
              className="p-2 m-2 bg-slate-800 absolute right-1 text-white rounded-lg"
              onClick={handleClearCart}
              >
               Clear Cart</button>
               </span>
               </div>
              <div className="w-6/12 m-auto">
             <ItemList items={cartItems}></ItemList>
              </div>
          </div>
     );
};

export default Cart;