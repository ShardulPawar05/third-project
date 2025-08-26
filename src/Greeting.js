import React from "react";

function Greeting(props){



return(
    <div>
        {props.username.map((singleElemnt)=>{
            

            return <h1>Hello  {singleElemnt} </h1>
        })}

    

</div>
);
}
export default Greeting;
