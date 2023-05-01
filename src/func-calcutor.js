import React from 'react'

export default function Calculator(){
    const num1=20
    const num2=4
    const calculate = (op) =>{
        let cal = `${num1} ${op} ${num2}`
        let result = eval(cal) //eval การตรวจสอบค่าในตัวแปร
        alert(`${cal} = ${result}`)
    }
    return(
        <div>
            <span>{num1}</span>
            <button onClick={() =>calculate('+')}> + </button>
            <button onClick={() =>calculate('-')}> - </button>
            <span>{num2}</span>
        </div>
    )
}