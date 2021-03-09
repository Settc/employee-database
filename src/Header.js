import React, { Component } from "react"

class Header extends Component {
    render() {
        return(
            <div className="tc bg-light-red pa4">
                <h1>Employee Directory</h1>
                <input 
                type="search"
                placeholder="Search employees"
                ></input>
            </div>
        )
    }
    
}

export default Header