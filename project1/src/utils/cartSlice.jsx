import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:"cart",
     initialState:{
          items:[],
     },
     reducers: {
          addItem:(state,action)=>{

               // redux toolkit uses immer behind the scene
               state.items.push(action.payload);
          },
          removeItem:(state,action)=>{
               state.items.pop();

          },
          clearCart:(state,action)=>{

               /*
               state = []
                we cannot make our state empty like this becoz my state is local variable . it will not mutate the original state.               
               */

               // state.items.length=0;

                return { items: [] };  //this new [] will be replaced inside originalstate = []
          },

     },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;