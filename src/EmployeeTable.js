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
                       <td>{this.props.name}</td>
                       <td>{this.props.dob}</td>
                       <td>{this.props.email}</td>
                       <td>{this.props.phone}</td>
                   </tbody>
               </table>
            </div>
        )
    }
}

export default EmployeeTable