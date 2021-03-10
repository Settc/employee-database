import React, { Component } from "react"
import Header from "./Header"
import EmployeeTable from "./EmployeeTable"
import { employees } from "./employees.js"



class App extends Component{

  constructor() {
    super()
    this.state = {
      employees: employees,
      searchfield: ""
    }
  }
  

  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
    console.log(event.target.value)
    
  }
  
  render() {
    const filteredEmployees = this.state.employees.filter(employees =>{
      return employees.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    
    return (
    <div>
      <Header searchChange={this.onSearchChange} />

      <EmployeeTable employees={filteredEmployees} />
    </div>

  )
  
}
}

export default App;
