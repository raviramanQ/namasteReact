
import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
     return(
          <div className="header">
               <div className="logo-container">
               <img 
               className="logo"
               src="https://i.pinimg.com/736x/8b/9f/d3/8b9fd33de51ccb7cf3635f5ba64e0ab7.jpg"
               />
               </div>
               <div className="nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Contact Us</li>
                         <li>Cart</li>
                    </ul>
               </div>
          </div>
     );
};

const styleCard = {
     backgroundColor: "#f0f0f0",
}


const RestaurantCard = () => {
     return (
<div className="res-card" style={styleCard}>
     <h3>
          imam food
     </h3>
      
</div>
     );
};

const Body = () => {
     return (
          <div className="body">
               <div className="Search">Search</div>
               <div className="res-container">
                    <RestaurantCard/>
               </div>
          </div>
     );
};


const AppLayout = () => {

     return (
          <div className ="app">
<Header/>
<Body />
               {/* Header
                   Body
                     Footer */}
          </div>
     );

};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);   // render a function
