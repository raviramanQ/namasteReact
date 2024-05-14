import { LOGO_URL } from "../utils/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

     // let button_name = 'Login';
     const [buttonName,setButtonname] = useState("Login");

     return(
          <div className="header">
               <div className="logo-container">
               <img 
               className="logo"
               src={LOGO_URL}
               />
               </div>
               <div className="nav-items">
                    <ul>
                         <li>
                         <Link to="/">Home</Link></li>
                         <li>
                              <Link to="/about">About Us</Link></li>
                         <li>
                         <Link to="/contact">Contact Us</Link></li>
                         <li>Cart</li>
                         <button className="login" onClick={()=>{
                              buttonName ==='Login'?setButtonname("Logout"):setButtonname("Login");
                       
                         
                         }}>{buttonName}</button>
                    </ul>
               </div>
          </div>
     );
};

export default Header;