import React from 'react'

export default class Profile extends React.Component {
    // const red = () => {
    //     alert("RED Function called")
    // }
    constructor() {
        super();
        this.state = {
            name: "Raj",
            email: "Raj@gmail.com",
            count: 0
        }
    }
    updatestate() {
        this.setState({
            name: "Manu Kaushik",
            count: this.state.count + 1
        })
    }
    render() {

        console.warn("Render")
        return (
            <div>
                <h1>Hello {this.state.count}</h1>
                <h1>Hello {this.state.name}</h1>
                <h1>Hello {this.state.email}</h1>
                <button onClick={() => { this.updatestate() }}>Update State</button>
                {/* <h1>{props.text.name}</h1> */}
                {/* <h1>{props.data}</h1> */}
                {/* <h1 onClick={red}>{props.text}</h1> */}
            </div >
        )
    }
}

// export default Profile