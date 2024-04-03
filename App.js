let header = React.createElement(
    
    "h1",
    {id:"my-jocker"},[
        React.createElement("h2",{},
        "hi Ram, how are you ?"
        ),
        React.createElement("h3",{},
        "hi karim, how are you ?"
        )
    
    ]
    );

    console.log(header); // {} object always 
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

// react element always return object @@@ above header returns object.

// root.render replacing what is there inside root.