import { useEffect, useState } from "react";

const User = ({name,location,contact}) =>{
 
     const [counter] = useState(0);
     const [counter2] = useState(2);

     useEffect()
     {
          console.log('test1111');
     }

// console.log(props);
     return(
          <div className="user-card">
               {console.log('omega')}
               <h1>Name: {name}</h1>
               <h2>Location: {location}</h2>
               <h3>Contact: {contact}</h3>
               <h1>test:{counter} </h1>
               <h1>test:{counter2} </h1>
          </div>
     );
};

export default User;