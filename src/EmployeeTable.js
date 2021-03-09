import React, { Component } from "react"
import "./EmployeeTable.css"

class EmployeeTable extends Component {
    render() {
        return (
            <div>
               <table>
                   <caption>Employees</caption>
                   <thead>
                       <tr>
                           <th>Full Name</th>
                           <th>D.O.B.</th>
                           <th>Email</th>
                           <th>Phone</th>
                       </tr>
                   </thead>
                   <tbody>
                       <td>Audrey Caufield</td>
                       <td>02/29/92</td>
                       <td>acaufield@gmail.com</td>
                       <td>5555555555</td>
                   </tbody>
               </table>
            </div>
        )
    }
}

export default EmployeeTable