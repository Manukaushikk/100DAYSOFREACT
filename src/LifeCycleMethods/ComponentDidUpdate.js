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
        if (this.state.who == null) {
            this.setState({ who: "Manu Kaushik" })
        }
    }
    render() {
        return (
            <div>
                <h1>React ComponentDidUpdate{this.state.who}</h1>
                <button onClick={() => { this.setState({ active: "Yes" }) }}>Acticate</button>
            </div>
        )
    }
}

export default ComponentDidUpdate   