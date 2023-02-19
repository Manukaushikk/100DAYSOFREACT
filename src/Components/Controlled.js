import React from 'react'

class Controlled extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        }
    }
    submit() {
        console.warn(this.state)
    }
    render() {
        return (
            <div>
                <h1>Controlled Component</h1>

                <input type="text" placeholder="Enter Name"
                    onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />

                <input type="password" placeholder="Enter Password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                <button onClick={() => { this.submit() }}>Submit</button>

            </div>
        )
    }
}

export default Controlled 