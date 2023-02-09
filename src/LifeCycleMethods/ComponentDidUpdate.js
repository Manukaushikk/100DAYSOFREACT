import React from 'react'

class ComponentDidUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            active: null,
            who: null
        }
    }
    componentDidUpdate() {
        console.warn("ComponentDidUpdate")
    }
    render() {
        return (
            <div>
                <h1>React ComponentDidUpdate</h1>
                <button onClick={() => { this.setState({ active: "Yes" }) }}>Acticate</button>
            </div>
        )
    }
}

export default ComponentDidUpdate   