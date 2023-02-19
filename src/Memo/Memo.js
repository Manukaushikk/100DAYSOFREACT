import React from 'react'

const Memo = (props) => {
    console.warn("Inner Component", props.data)
    return (
        <div>
            <h1>Memo Component</h1>
        </div>
    )
}

export default Memo