import React, { useState } from 'react'

function Basichooks() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Hooks in functional COmponent🪝{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increament ➕</button>
            <button onClick={() => { setCount(count - 1) }}>Decreament ➖</button>
        </div>
    )
}

export default Basichooks