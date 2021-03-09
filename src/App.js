import React, { Component } from "react"
import Header from "./Header"
import EmployeeTable from "./EmployeeTable"

class App extends Component {
  render() {
    return (
     <div className="bg-lightest-blue">
       <Header />

       <EmployeeTable />
     </div>
    )
  }
}

export default App;
