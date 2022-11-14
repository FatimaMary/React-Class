import React from "react";

// function Header() {
//     return(
//         <div> 
//             <h1>Welcome</h1>
//         </div>
//     )
// }

class Header extends React.Component{
    state = {displayBio: false};
    toggleDisplayBio = this.toggleDisplayBio.bind(this);
    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio});
    }
        render() {
            const bio = this.state.displayBio ? (
                <div><h3>Hello</h3>
                <button onClick={this.toggleDisplayBio}>Show</button></div>
            ) : <div>
                    <p className="error">Error</p>
                    <button onClick={this.toggleDisplayBio}>More</button>
                </div>
        return(
            <div>
                <h1>Thank You</h1>
                { bio }
            </div>
        )
    }
}

export default Header