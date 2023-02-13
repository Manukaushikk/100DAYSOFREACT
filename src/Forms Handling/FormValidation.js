import React from 'react'

class FormValidation extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            password: "",
            nameError: "",
            passwordError: ""
        }
    }
    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState({ nameError: "Invalid Name", passwordError: "Password should be more than 5" })
        }

        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Name" })
        }

        else if (this.state.password.length < 5) {
            this.setState({ passwordError: "Password should be more than 5" })
        }
        else {
            return true;
        }
    }
    submit() {
        this.setState({ nameError: "", passwordError: "" })

        if (this.valid()) {
            alert("SUBMITTED")
        }
    }

    render() {
        return (
            <div>
                <h1>Form Validation</h1>
                <input type="text" onChange={(event) => this.setState({ name: event.target.value })}></input>
                <p style={{ color: "red" }}>{this.state.nameError}</p>

                <input type="password" onChange={(event) => this.setState({ password: event.target.value })}></input>
                <p style={{ color: "blue" }}>{this.state.passwordError}</p>

                <button onClick={() => this.submit()}>Submit</button>
            </div>
        )
    }
}

export default FormValidation