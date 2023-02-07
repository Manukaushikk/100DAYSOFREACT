import React from 'react'

function Profile(props) {
    // const red = () => {
    //     alert("RED Function called")
    // }
    return (
        <div>
            <h1>{props.text.name}</h1>
            <h1>{props.data}</h1>
            {/* <h1 onClick={red}>{props.text}</h1> */}
        </div>
    )
}

export default Profile