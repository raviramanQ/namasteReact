import { LOGO_URL } from "../utils/Constant";
import { useState } from "react";

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
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Contact Us</li>
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