import React from "react"

const TableData = ( {img, name, dob, email, phone } ) => {
    return (
        
            
            <tr>
                <td><img src={img} alt="employee"></img></td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
            
       
    )
}

export default TableData