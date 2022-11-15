import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class FindDom extends Component {
    constructor(){
        super();
        this.findDOMHandler1 = this.findDOMHandler1.bind(this);

    }
    findDOMHandler1() {
        var msg = document.getElementById('demo1');
        ReactDOM.findDOMNode(msg).style.color = 'red'
    }

    render(){
        return(
            <div>
                <h2 id='demo1'>Hai !</h2>
                <button onClick={this.findDOMHandler1}>Change</button>
            </div>
        )
    }
}

export default FindDom