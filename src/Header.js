import React from "react"

const Header = () => {
    
        return(
            <div className="tc bg-light-red pa4">
                <h1 className="ba b--lightest-blue pa2">Employee Directory</h1>
                <input 
                className="bg-lightest-blue"
                type="search"
                placeholder="Search employees"
                ></input>
            </div>
        )
    }

export default Header