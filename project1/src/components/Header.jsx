import { LOGO_URL } from "../utils/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnLineStatus";

const Header = () =>{

     // let button_name = 'Login';
     const [buttonName,setButtonname] = useState("Login");
const OnlineStatus = useOnlineStatus();
     return(
          <div className="flex justify-between bg-blue-200">
               <div className="logo-container">
               <img 
               className="w-28"
               src={LOGO_URL}
               />
               </div>
               <div className="nav-items">
               <ul className="flex p-4 m-4">    
               
                         <li>
                         Status:  {OnlineStatus?"  online ":" offline "}</li>
                         <li>
                         <Link to="/">Home</Link></li>
                         <li>
                              <Link to="/about">About Us</Link>
                         </li>
                         <li>
                              <Link to="/grocery">Grocery</Link>
                         </li>
                         <li>
                         <Link to="/contact">Contact Us</Link>
                         </li>
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