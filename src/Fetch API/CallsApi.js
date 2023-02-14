import React from 'react'

class CallsApi extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                console.warn(result);
                this.setState({ users: result.data })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>
                    CallsApi
                </h1>
                {
                    this.state.users ?
                        this.state.users.map((item, i) =>
                            <div><p>{i}--- {item.first_name} {item.last_name}---{item.email}</p></div>
                        )
                        :
                        null
                }
            </div>
        )
    }
}

export default CallsApi