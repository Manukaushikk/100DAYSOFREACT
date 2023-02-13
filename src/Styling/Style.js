import React from 'react'
import '../Styling/custom.css'
export default function Style(prop) {

    const h2 = {
        color: 'green',
        fontSize: '32px'
    }

    const h3 = {
        color: 'blue',
        fontSize: '21px'
    }
    return (
        <div>
            <h1 className='header'>Global Style </h1>
            {/* <h2 style={h2}>Inline Style </h2> */}
            <h4 style={prop.data == 'apply' ? h2 : h3}>Inline Style </h4> {/* Agar apply hai App.js ki style me toh he change kro otherwise koi jarurat nhi hai */}
            {/* <h2 style={prop.data == 'apply' ? h2 : ""}>Inline Style </h2> Agar apply hai App.js ki style me toh he change kro otherwise koi jarurat nhi hai */}
        </div >
    )
}
