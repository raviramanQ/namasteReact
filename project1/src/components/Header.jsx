import { LOGO_URL } from "../utils/Constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnLineStatus";
import UserContext from "../utils/UseContext";

const Header = () =>{

     // let button_name = 'Login';
     const [buttonName,setButtonname] = useState("Login");
     const OnlineStatus = useOnlineStatus();
     
     const {loggedInUser} = useContext(UserContext);

     // console.log();


     return(
          <div className="flex justify-between bg-blue-200 shadow-lg mb mt-1 px-5 sm:bg-yellow-300">
               <div className="logo-container">
               <img 
               className="w-28"
               src={LOGO_URL}
               />
               </div>
               <div className="flex items-center">
               <ul className="flex p-4 m-4">    
               
                         <li className="px-4">
                         Status:  {OnlineStatus? "✅" :"🔴"}</li>
                         <li className="px-4">
                         <Link to="/">Home</Link></li>
                         <li className="px-4">
                              <Link to="/about">About Us</Link>
                         </li>
                         <li className="px-4">
                              <Link to="/grocery">Grocery</Link>
                         </li>
                         <li className="px-4">
                         <Link to="/contact">Contact Us</Link>
                         </li>
                         <li className="px-4">Cart</li>
                         <button className="login" onClick={()=>{
                              buttonName ==='Login'?setButtonname("Logout"):setButtonname("Login");
                       
                         
                         }}>{buttonName}</button>

                         <li className="px-4 font-bold">{loggedInUser}</li>
                    </ul>
               </div>
          </div>
     );
};

export default Header;