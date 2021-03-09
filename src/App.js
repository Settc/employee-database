import React, { Component } from "react"
import Header from "./Header"
import EmployeeTable from "./EmployeeTable"
import { employees } from "./employees.js"

class App extends Component {



  render() {
    
    return (
     <div className="bg-lightest-blue">
       <Header />

       <EmployeeTable 
        image={employees[0].results[0].picture.medium}
        name={employees[0].results[0].name.first + " " + employees[0].results[0].name.last} 
        dob={employees[0].dob}
        email={employees[0].email}
        phone={employees[0].phone}
        />
     </div>
    )
  }
}

export default App;
