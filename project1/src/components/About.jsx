import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// import TestuserClass from "./TestuserClass";

class about extends React.Component{

   constructor(props){
      super(props);
      console.log('parent constructor');
   }

   componentDidMount(){
     console.log("parent component did mount");
   }

   render(){
      console.log('parent render');

      return (
         <div>
         <h2>About Page</h2>
         <User name={"Vicky   (function)"} location = {"Mumbai"} contact={"+91 8851048263"}/>
         <br/>
         <UserClass name={"Ram  (Class)"} location = {"Ayodhya"} contact={"+91 9999999999"}/>
         {/* <TestuserClass name={"Sita  (Class)"} location = {"Mithla"} contact={"+91 8888888888"}/> */}

         </div>
      );
   };
};

// const about =() => {
//    return ( 
//       <div>
//    <h2>About Page</h2>
//    <User name={"Vicky   (function)"} location = {"Mumbai"} contact={"+91 8851048263"}/>
//    <br/>
//    <UserClass name={"Ram  (Class)"} location = {"Ayodhya"} contact={"+91 9999999999"}/>
//    </div>
//    );
// };

export default about;