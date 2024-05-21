import React from "react";

class TestuserClass extends React.Component{


// Summary
// super(props) is used to call the parent class's constructor with props.
// It ensures that this.props is correctly initialized and available in the constructor.
// This is a crucial step when extending React.Component to ensure proper functionality and initialization of the component.

     constructor(props)
     {
          super(props)

          console.log(this.props.name+'child constructor');

     //   console.log(props);
     this.state = {
          counter :0,
          counter2:2
     };
     };

    async componentDidMount(){
          console.log(this.props.name+"child component did mount");

          // const data = await fetch("https://api.github.com/users/raviramanQ");
          // const json = await data.json();
          // console.log(json);
     }

     // *** lifecycle method for child called after parent
     // *** render the component then make an api call and then filled the data in it.


     render(){
          console.log(this.props.name+'child render');
          const {name,location,contact} = this.props;
          const {counter,counter2} = this.state
          return(
               <div className="user-card">
                   
                    <h1>
                         Name: Class {name}
                    </h1>
                    <h2>
                         Location: Class {location}
                    </h2>
                    <h3>
                         Contact: Class {contact}
                    </h3>
                    <h1>
                         test: {counter}
                    </h1>
                    <h1>
                         test: {counter2}
                    </h1>
                    <button onClick={()=>{
                         this.setState({
                              counter2:this.state.counter2+2,
                         })

                    }}>click</button>

               </div>
          );
     };
};

export default TestuserClass;