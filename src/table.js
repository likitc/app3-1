import React from 'react'

export default function Table(){
    const data= [
        ['JavaScript',100],
        ['React',200],
        ['React-Native',150]
    ]
    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor='yellow'
    }
    const onMouseOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor='white'
    }
    return(
        <table border="1">
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
    {    
         data.map(item =>{  
            return (
            <tr onMouseOver={onMouseOverRow}
                onMouseOut={onMouseOutRow}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
            </tr>
            )
        } )
    }
        </table>
    )
}