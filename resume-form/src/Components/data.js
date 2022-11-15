import React, { Component } from "react";
imp

class Data extends React.Component {
    render(){
        return(
            <div>
                <h1 className='app-header'>My data</h1>
                <table className='app-table'>
                <tr>
                    <td>Name:</td>
                    <td>{App.this.props.name}</td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td>{App.this.props.dob}</td>
                </tr>
                <tr>
                    <td>Qualification:</td>
                    <td>{App.this.props.study}</td>
                </tr>
                <tr>
                    <td>Major Subject:</td>
                    <td>{App.this.props.branch}</td>
                </tr>
                </table>
            </div>
        )
    }
}

export default Data 