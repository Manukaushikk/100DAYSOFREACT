import React from 'react'

class ComponentDidMount extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
        console.warn("constructer")
    }
    componentDidMount() {
        this.setState({ data: "Updated 🔝" });
        console.warn("ComponentDidMount")

    }



    render() {
        console.warn("render")
        return (
            <div>
                <h1>
                    Life Cycle Mrthods : ComponentDidMount
                </h1>
            </div >
        )
    }
}

export default ComponentDidMount