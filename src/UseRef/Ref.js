// This will change the Html directly
// Bhot acchi cheez nhi hai humari speed ko slow kr deta hai
import React from 'react'

class Ref extends React.Component {
    constructor() {
        super()
        this.userRef = React.createRef();
    }
    editval() {
        // console.warn(this.userRef);
        // this.userRef.current.focus()
        this.userRef.current.value = "57"
    }
    render() {
        return (
            <div>
                <h1>What is Ref in Html</h1>
                <input ref={this.userRef} type="text" name="user" />
                <button onClick={() => this.editval()}>Click Me! 🔘 </button>
            </div>
        )
    }
}

export default Ref