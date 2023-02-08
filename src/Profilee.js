import React from 'react'

export default class Profilee extends React.Component {
    testFun() {
        alert("TestinFun")
    }
    render() {
        return (
            <div>
                <h1>Profilee</h1>
                <button onClick={() => this.testFun()}>Click Me</button>
            </div>
        )
    }
}
