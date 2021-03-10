import React from "react"
import Header from "./Header"
import EmployeeTable from "./EmployeeTable"
import { employees } from "./employees.js"

const App = () => {


  return (
    <div>
      <Header />

      <EmployeeTable employees={employees} />
    </div>

  )
  
}

export default App;
