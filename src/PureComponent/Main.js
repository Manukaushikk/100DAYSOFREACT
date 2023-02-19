import React, { Component, PureComponent } from 'react'

class Main extends PureComponent {
    // class Main extends Component {

    constructor() {
        super();
        this.state = {
            data: 10
        }
    }


    render() {
        console.warn(this.state);
        return (
            <div>
                <div>
                    <h1>Pure Component {this.state.data}</h1>
                    <button onClick={() => { this.setState({ data: 20 }) }}>Update state</button>
                </div>
            </div>
        )
    }

}

export default Main