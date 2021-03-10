import React from "react"
import TableData from "./TableData"
import "./EmployeeTable.css"

const EmployeeTable = ( {employees} ) => {
        const employeeArr = employees.map((employee, i) => {
            
        return (
            
             <TableData 
            key={employees.id}
            img={employees[i].results[0].picture.thumbnail} 
            name={employees[i].name}
            dob={employees[i].results[0].dob.age}
            email={employees[i].results[0].email}
            phone={employees[i].results[0].phone}
            />
            )
        })
        
        return (
            <div>
               <table>
                   
                   <thead>
                       <tr>
                        <th><i class="fas fa-camera-retro"></i></th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                       </tr>
                   </thead>

                   <tbody>
                       {employeeArr}
                   </tbody>

               </table>
            </div>
        )
    }


export default EmployeeTable