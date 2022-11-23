import React from "react";
import { MyContext } from "./context";


// class ChangeName extends React.Component {
//     render(){
//       return(
//         <div>
//             <MyContext.Consumer> {
//                 (me) =>{
//                     return <h1>My Name is {me.name}</h1>
//                 }}
//             </MyContext.Consumer>
           
//         </div>
        
//       )
//     }
//   }


export default (props) => {
    return(
        <MyContext.Consumer>
            {(me) => { return(<div>
                <h1>My Name is {me.name}</h1>
            </div>)}}
            
        </MyContext.Consumer>
    )
}

//   export default ChangeName;