import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.warn(count);
        // }, [count]) // unlimited tak call hoga
    }, []) // only ek baar call hoga
    // }, [count == 5]) // upto 5 tak call nhi hoga sirf ussi pr call hoga
    return (
        <div>
            <h1>UseEffect ...  {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update state</button>
        </div>
    )
}
export default UseEffect