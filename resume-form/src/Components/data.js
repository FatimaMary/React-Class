import React, { Component } from "react";
import App from "../App";

class Data extends React.Component {
    constructor(props)
    {
        super(props);
        this.props={
            name:"prakash",
        }
    };
    render(){
        return(
            <div>
                <h1 className='app-header'>My data</h1>
                <table className='app-table'>
                <tr>
                    <td>Name:</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td>{App.dob}</td>
                </tr>
                <tr>
                    <td>Qualification:</td>
                    <td>{App.study}</td>
                </tr>
                <tr>
                    <td>Major Subject:</td>
                    <td>{App.branch}</td>
                </tr>
                </table>
            </div>
        )
    }
}

// Data.defaultProps = {
//     name: "A.Fatima Mary",
//     dob: "09.08.1992",
//     study: "M.Sc.,M.phil",
//     branch: "Mathematics"
//   }

export default Data 