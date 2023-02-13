import React, { Component } from 'react'

class ComponentWillUnmount extends Component {
    componentWillUnmount() {
        alert("Component Will be DEleted");
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name : Manu Kaushik</li>
                    <li>Email : Manurwr15@gmail.com</li>
                    <li>Mobile : 940000000000</li>
                </ul>
            </div >
        );
    }
}

export default ComponentWillUnmount;