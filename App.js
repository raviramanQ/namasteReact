// import React from "react";
// import  ReactDOM  from "react-dom/client";

// let header = React.createElement(
    
//     "h1",
//     {id:"my-jocker"},[
//         React.createElement("h2",{},
//         "hi Ram, how are you ?"
//         ),
//         React.createElement("h3",{},
//         "hi karim, how are you ?"
//         )
    
//     ]
//     );


//     console.log(header); // {} object always 

//     let root = ReactDOM.createRoot(document.getElementById("root"));
//     console.log("ravi------>>>>>>",root);


//     root.render(header);

// // react element always return object @@@ above header returns object.

// // root.render replacing what is there inside root.


// ##################################################################################### till episode 2 ########################################################



import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h2",
//     {id : "heading"},
//     "Namaste React"
// );

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// JSX is HTML like syntax or XML like syntax

// here we have className not class  ** use camel case in jsx to give attribute.
// if we have to write JSX in multiple line then use () bracket then only babel understand it's jsx but if single line then no need to write in bracket.

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// note :- js engine do not understand jsx code ,(jsx transpiled before it reached to java script engine ) then how is jsx printed , it's because of parel where parcel gives this job to babel. (babel is transpiling our code to under javascript engine)  


const jsxheadings = (<h1 className="head">
    Namaste react jsx syntax
    </h1>
    );


// react component
// functional based component - NEW (study now) => a function which writterns a some piece of jsx is a functional components

// const HeadingComponent_short  = () => (<h1 >React functional component</h1>);

// another syntax with return
// const HeadingComponent = () => {

//     return <div id = "container"> 
//     <h1 >React functional component</h1>
//     </div>
// };

const Title = () => (

    <div id = "container"> 
   <h1 >React functional Title component </h1>
   </div>
);

// component composition title in headingcomponent
const HeadingComponent = () => (

     <div id = "container"> 
     {Title()  /*react function */} 
     {jsxheadings  /*react element */}
     <Title></Title> 
     <Title/> 
    <h1 >React functional component</h1>
    </div>
);

// Jsx sanitises your data and prevent it from cross site scripting example {data ==> from API}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);   // here root.render will replace whatever we have in heading. ** render an element

root.render(<HeadingComponent />);   // render a function
