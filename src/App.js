import React, { Component } from "react"
import Header from "./Header"
import EmployeeTable from "./EmployeeTable"
import { employees } from "./employees.js"

class App extends Component {



  render() {
    
    return (
     <div className="bg-lightest-blue">
       <Header />

       <EmployeeTable name={employees[0].name} />
     </div>
    )
  }
}

export default App;
