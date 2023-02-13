import React from 'react'

export default class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            user: null,
            password: null
        }
    }
    submit() {
        console.warn(this.state);
    }

    render() {
        return (
            <div>
                <h1> Forms Handling</h1>
                <input
                    type="text"
                    name="user"
                    onChange={(e) => { this.setState({ user: e.target.value }) }} />
                <br />
                <input
                    type="password"
                    name="password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <br />
                <button onClick={() => this.submit()} >Submit</button>
            </div >
        )
    }
}
